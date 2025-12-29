// Lightweight shims to avoid editor red underlines when dependencies/types aren't installed yet
declare module "esbuild" {
  export function build(opts: any): Promise<any>;
}

declare module "vite" {
  export function build(opts?: any): Promise<any>;
}

declare module "fs/promises" {
  export function rm(path: string, options?: any): Promise<void>;
  export function readFile(path: string, enc?: string): Promise<string>;
}

// Minimal process shim if @types/node not installed yet
declare const process: {
  env: { [key: string]: string | undefined };
  exit(code?: number): never | void;
};
