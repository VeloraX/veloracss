import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import { relative, resolve } from "node:path";
import { bundle } from "lightningcss";
import { build } from "esbuild";

const root = process.cwd();
const distDir = resolve(root, "dist");

async function collectFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const entryPath = resolve(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await collectFiles(entryPath)));
      continue;
    }

    files.push(entryPath);
  }

  return files;
}

function uniqueSorted(values) {
  return [...new Set(values)].sort((left, right) => left.localeCompare(right));
}

async function writeApiManifest() {
  const packageJson = JSON.parse(await readFile(resolve(root, "package.json"), "utf8"));
  const sourceFiles = (await collectFiles(resolve(root, "src"))).filter((filePath) => filePath.endsWith(".css"));

  const manifestFiles = [];
  const classNames = [];
  const customProperties = [];

  for (const filePath of sourceFiles) {
    const source = await readFile(filePath, "utf8");
    const fileClasses = uniqueSorted([...source.matchAll(/(?<![a-z0-9_-])\.vel-[a-z0-9-]+/gi)].map((match) => match[0].slice(1)));
    const fileTokens = uniqueSorted([...source.matchAll(/--vel-[a-z0-9-]+/gi)].map((match) => match[0]));
    const relativePath = relative(root, filePath).replaceAll("\\", "/");
    const surfaceType = relativePath.includes("/components/") ? "component" : relativePath.includes("/utilities/") ? "utility" : "foundation";

    classNames.push(...fileClasses);
    customProperties.push(...fileTokens);
    manifestFiles.push({
      path: relativePath,
      type: surfaceType,
      classes: fileClasses,
      customProperties: fileTokens,
    });
  }

  const manifest = {
    name: packageJson.name,
    version: packageJson.version,
    generatedAt: new Date().toISOString(),
    publicSurface: {
      classPrefix: "vel-",
      tokenPrefix: "--vel-",
      runtimeAttributes: ["data-vel-toggle", "data-vel-open", "data-vel-close"],
      styleRule: "Default Velora 0.1 surfaces use reduced roundness; pill styling is opt-in rather than the default.",
    },
    css: {
      classNames: uniqueSorted(classNames),
      customProperties: uniqueSorted(customProperties),
      files: manifestFiles.sort((left, right) => left.path.localeCompare(right.path)),
    },
  };

  await writeFile(resolve(distDir, "velora.manifest.json"), `${JSON.stringify(manifest, null, 2)}\n`);
}

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

await writeApiManifest();

console.log("Built VeloraCSS core into dist/");
