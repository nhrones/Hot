export const DEBUG = true
export const MINIFY = false
export const host = "localhost"
export const port = 8000

export type CTX = {
    cwd: string    
    fileName: string
    port: number
    url: string
}

export const ctx: CTX = {
    cwd: Deno.cwd(),
    fileName: './server.ts',
    port: port,
    url: 'localhost',
}

export const setCTX = (newCTX:CTX ) => {
    ctx.cwd = newCTX.cwd
    ctx.fileName = newCTX.fileName
    ctx.port = newCTX.port
    ctx.url = newCTX.url
}
