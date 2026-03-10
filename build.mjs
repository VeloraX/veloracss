import { mkdir, readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { bundle } from "lightningcss";
import { build } from "esbuild";

const root = process.cwd();
const distDir = resolve(root, "dist");

await mkdir(distDir, { recursive: true });

const cssEntry = resolve(root, "src", "velora.css");
const cssBundle = bundle({
  filename: cssEntry,
  minify: false,
  sourceMap: false,
});
const cssMinBundle = bundle({
  filename: cssEntry,
  minify: true,
  sourceMap: false,
});

await writeFile(resolve(distDir, "velora.css"), cssBundle.code);
await writeFile(resolve(distDir, "velora.min.css"), cssMinBundle.code);

const jsEntry = resolve(root, "src", "velora.js");
const jsSource = await readFile(jsEntry, "utf8");

if (jsSource.trim().length > 0) {
  await build({
    entryPoints: [jsEntry],
    bundle: true,
    format: "esm",
    platform: "browser",
    outfile: resolve(distDir, "velora.js"),
    minify: false,
    logLevel: "silent",
  });

  await build({
    entryPoints: [jsEntry],
    bundle: true,
    format: "esm",
    platform: "browser",
    outfile: resolve(distDir, "velora.min.js"),
    minify: true,
    logLevel: "silent",
  });
} else {
  await writeFile(resolve(distDir, "velora.js"), "");
  await writeFile(resolve(distDir, "velora.min.js"), "");
}

console.log("Built VeloraCSS core into dist/");
