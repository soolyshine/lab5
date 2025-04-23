import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import run from '@rollup/plugin-run';

const isDevelopment = process.env.ROLLUP_WATCH === 'true';

export default {
  input: 'index.js',
  output: {
    file: './dist/server.mjs',
    format: 'es',
  },
  plugins: [
    nodeResolve(),
    commonjs(),
    json(), 
    isDevelopment && run(),
  ],
};