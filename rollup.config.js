import cjs from 'rollup-plugin-commonjs'
import json from 'rollup-plugin-json'
import filesize from 'rollup-plugin-filesize'
import {dependencies} from './package.json'

const plugins = [cjs(), json(), filesize()]

const external = ['path', 'fs', ...Object.keys(dependencies)]

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/cli',
    format: 'cjs',
    banner: '#!/usr/bin/env node',
  },
  external,
  plugins,
}
