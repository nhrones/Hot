
/** 
 * Start the default browser
 * @param { number } port - defaults to 9001
 * @param { boolean } log - defaults to false
 */
export const startBrowser = (port = 9001, log = false) => {
   if(log) console.log('Browser Starting!')
   const commander = new Deno.Command(
      "cmd",
      { args: ["/C", "start", `http://localhost:${port}`] }
   )
   commander.outputSync()
}   
 