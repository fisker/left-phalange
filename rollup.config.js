import cjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import {dependencies} from './package.json'

const plugins = [cjs(), json()]

const external = ['path', 'fs', ...Object.keys(dependencies)]

export default {
  input: 'src/index.mjs',
  output: {
    file: 'dist/cli.mjs',
    format: 'esm',
    banner: '#!/usr/bin/env node',
  },
  external,
  plugins,
}
