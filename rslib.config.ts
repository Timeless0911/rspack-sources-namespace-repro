import { defineConfig } from '@rslib/core';

export default defineConfig({
  lib: [
    {
      format: 'esm',
      syntax: ['es2022'],
      source: {
        tsconfigPath: './tsconfig.json',
      },
      output: {
        externals: {
          'webpack-sources':
            'node-commonjs ../compiled/webpack-sources/index.js',
        },
      },
    },
  ],
});
