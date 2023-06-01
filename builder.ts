
import { esbuild, denoPlugin } from "./deps.ts";

export type buildCFG = {
    entry: string[],
    out: string,
    minify: boolean
}
 
/** 
 * Builds an entrypoint into a single ESM `bundle.js` output. 
 */
export const build = async(cfg: buildCFG) => { 
    await esbuild.build({
      // @ts-ignore: outdated types
        plugins: [denoPlugin()],
        entryPoints: cfg.entry,
        outfile: cfg.out,
        bundle: true,
        minify: cfg.minify,
        banner: { js: '// deno-lint-ignore-file' },
        format: "esm"
    }).catch((e) => console.info(e));
    esbuild.stop();
}
