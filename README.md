# Repro

This reproduces an invalid ESM output where the generated bundle declares
`index_js_namespaceObject` twice:

1. `import * as index_js_namespaceObject from "../compiled/webpack-sources/index.js";`
2. `const index_js_namespaceObject = __rspack_createRequire_require("../compiled/webpack-sources/index.js");`

That makes `dist/index.js` fail to parse as ESM with:

`SyntaxError: Identifier 'index_js_namespaceObject' has already been declared`

## Files

- `src/sources.ts`: wraps an external module with both `export { sources }` and `export *`
- `src/exports.ts`: re-exports the namespace
- `src/internal.ts`: consumes a named export from the same wrapper
- `src/index.ts`: both `import * as exportsNS from "./exports"` and `export * from "./exports"`
- `rslib.config.ts`: ESM build with `webpack-sources` externalized as `node-commonjs`

## Run

```bash
node_modules/.bin/rslib build
node check.mjs
```
