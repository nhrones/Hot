import { debounce, join, serve, serveFile } from './deps.ts'
import { startBrowser } from './browser.ts'
import { DEBUG, MINIFY } from './constants.ts'
import { buildCFG, build } from './builder.ts'
import { host, port } from './constants.ts'
import { registerWatcher } from './watcher.ts'
import { inject } from './injector.ts'

/** 
 * The folder that contains the index.html to be served   
 * this option would be entered as cli first arg - Deno.args[0]  
 * default = root folder
 */
const targetFolder = Deno.args[0] || "";


/** 
 * Handle all http requests 
 */
async function handleRequest(request: Request): Promise<Response> {

   let { pathname } = new URL(request.url);

   if (pathname.includes('/registerWatcher')) {
      return registerWatcher(request)
   }

   let isIndex = false
   if (pathname.endsWith("/")) {
      isIndex = true
      pathname += "index.html";
   }

   const fullPath = (targetFolder.length > 0)
      ? join(Deno.cwd(), targetFolder, pathname)
      : join(Deno.cwd(), pathname);

   console.log(`fullPath = ${fullPath}`)

   try {
      // We intercept the index.html request so that we can
      // inject our hot-refresh service script into it.
      if (isIndex) {
         const content = await Deno.readTextFile(fullPath)
         const body = inject(content)
         // create appropriate headers    
         const headers = new Headers()
         headers.set("content-type", "text/html; charset=utf-8")
         // We don't want to cache these, as we exspect frequent dev changes
         headers.append("Cache-Control", "no-store")
         return new Response(body, { status: 200, headers });
      } else {
         // find the file -> get the content -> return it in a response
         const resp = await serveFile(request, fullPath)
         resp.headers.append("Cache-Control", "no-store")
         return resp
      }
   } catch (e) {
      console.error(e.message)
      return await Promise.resolve(new Response(
         "Internal server error: " + e.message, { status: 500 }
      ))
   }
}


/** 
 * Start the server 
 */
serve(handleRequest, { hostname: host, port: port })
   .then(() => console.log("Server closed"))
   .catch((err) => console.info('Server caught error - ', err))

// launch the browser with index.html 
startBrowser(port)

// Watch for file changes
const fileWatch = Deno.watchFs('./');
const handleChange = debounce(
   (event: Deno.FsEvent) => {
      const { kind, paths } = event
      const path = paths[0]
      if (DEBUG) console.log(`[${kind}]    ${path}`)
      // we build from `src`
      if (path.includes('/src')) {

         console.log('esBuild Start!')
         const cfg: buildCFG = {
            entry: ["./src/main.tsx"],
            minify: MINIFY,
            out: (targetFolder.length > 0) ? `./${targetFolder}/bundle.js` : './bundle.js'
         }
         console.log('esBuild Start!')
         build(cfg).then(() => {
            console.log('Built bundle.js!')
         }).catch((err) => {
            console.info('build err - ', err)
         })
      } // web app change
      else {
         const actionType = (path.endsWith("css"))
            ? 'refreshcss'
            : 'reload'
         console.log(`Action[${actionType}]  sent to client!`)
         const tempBC = new BroadcastChannel("sse");
         tempBC.postMessage({ action: actionType, path: path });
         tempBC.close();
      }
   }, 400,
);

// watch and handle any file changes
for await (const event of fileWatch) {
   handleChange(event)
}
