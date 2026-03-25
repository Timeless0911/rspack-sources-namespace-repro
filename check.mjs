import fs from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const distPath = path.resolve("dist/index.js");
const code = await fs.readFile(distPath, "utf8");

const matches = [...code.matchAll(/index_js_namespaceObject/g)].map(
  match => match.index
);

console.log("occurrences:", matches.length);

if (
  code.includes('import * as index_js_namespaceObject') &&
  code.includes('const index_js_namespaceObject = __rspack_createRequire_require')
) {
  console.log("duplicate declaration pattern found");
} else {
  console.log("duplicate declaration pattern not found");
}

try {
  await import(pathToFileURL(distPath).href);
  console.log("dynamic import succeeded");
} catch (error) {
  console.error("dynamic import failed:");
  console.error(error);
  process.exitCode = 1;
}
