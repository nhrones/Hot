
/**
 * This function recieves the raw text from reading the index.html file.  
 * We then replace the body-end-tag </body> tag with our custom SSE code.   
 */
export const inject = (body: string) => {
   const endOfBody = body.indexOf('</body>')
   if (endOfBody > 5) {
      const newBody = body.replace('</body>', `
    <script id="injected">
        (function () {
            const events = new EventSource("/registerWatcher");
            console.log("CONNECTING");
            events.onopen = () => {
                console.log("CONNECTED");
            };
            events.onerror = () => {
                switch (events.readyState) {
                    case EventSource.CLOSED:
                        console.log("DISCONNECTED");
                        break;
                }
            };
            events.onmessage = (e) => {
                try {
                    const res = JSON.parse(e.data);
                    const { action } = res;
                    console.log("sse got action - ", action);
                    if (action === "refreshcss") {
                        console.log("refreshCSS()");
                        const sheets = [].slice.call(document.getElementsByTagName("link"));
                        const head = document.getElementsByTagName("head")[0];
                        for (let i = 0; i < sheets.length; ++i) {
                            const elem = sheets[i];
                            const parent = elem.parentElement || head;
                            parent.removeChild(elem);
                            const rel = elem.rel;
                            if (elem.href && typeof rel != "string" || rel.length == 0 || rel.toLowerCase() == "stylesheet") {
                                const url = elem.href.replace(/(&|\\?)_cacheOverride=d+/, "");
                                elem.href = url + (url.indexOf("?") >= 0 ? "&" : "?") + "_cacheOverride=" + new Date().valueOf();
                            }
                            parent.appendChild(elem);
                        }
                    } else if (action === "reload") {
                        console.log("Reload requested!");
                        window.location.reload();
                    }
                } catch (err) {
                    console.info("err - ", err);
                }
            };
        })();
    </script>
    </body>`);
      return newBody
   } else {
      console.log('No </body> found!')
      return body
   }


}