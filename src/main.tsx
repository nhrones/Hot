/// <reference lib="dom" />
/** @jsx h */
    
import { h, render } from "https://esm.sh/preact@10.13.2";

// Create your Preact app
const app = <h1>Hello World!</h1>;
 
// render to the document
render(app, document.body);

/** our counter */
let cnt = 1;

const logger = document.getElementById('logger') as HTMLPreElement;
const btn = document.getElementById('btn') as HTMLButtonElement ;

btn.onclick = () => {
    log(`Click count = ${cnt++}  `)
}

/** on-screen logger */
export const log = (what: string, whatElse = null, and = null) => {
    let text = `${what.padEnd(30, '-')} `;
    if (whatElse) text += `${whatElse} `;
    if (and) text += `${and}`;
    text += new Date().toLocaleTimeString();
    logger.textContent = `${text}${'\n'}` + logger.textContent;
};
