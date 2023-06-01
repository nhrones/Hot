
import { DEBUG } from './constants.ts'

const watcherChannel = new BroadcastChannel("sse");

/** 
 * This is the streaming service to handle browser refresh.
 * 
 * The code we've injected into index.html registers for this SSE stream.
 * The BroadcastChannel above, listens for messages from the servers  
 * file-change handler (./server.ts-line-97).
 * 
 * This handler sends either a 'refreshcss' or a 'reload' action message.
 * The injected code in index.html will then either do a stylesheet insert 
 * or call `window.location.reload()` to refresh the page.
 * 
 * Below, we just stream all `action` messages to the browsers eventSource.
 * See: ./injector.ts    
 */
export function registerWatcher(_req: Request): Response {
    if (DEBUG) console.info('Started SSE Stream! - ', _req.url)
    const stream = new ReadableStream({
        start: (controller) => {
            // listening for bc messages
            watcherChannel.onmessage = (e) => {
                const { action, path } = e.data
                if (DEBUG) console.log(`Watcher got ${action} from ${path}`)
                const reply = JSON.stringify({ action: action })
                controller.enqueue('data: ' + reply + '\n\n');
            }
        },
        cancel() {
         watcherChannel.close();
        }
    })
    return new Response(stream.pipeThrough(new TextEncoderStream()), {
        headers: { "content-type": "text/event-stream" },
    })
}
