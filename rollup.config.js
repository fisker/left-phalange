import cjs from 'rollup-plugin-commonjs'
import json from 'rollup-plugin-json'
import {dependencies} from './package.json'

export default [
  // {
  //   input: "src/index.js",
  //   output: {
  //     file: "lib/index.js",
  //     format: "cjs"
  //   }
  // },
  {
    input: 'src/cli.js',
    output: {
      file: 'bin/cli',
      format: 'cjs',
      banner: '#!/usr/bin/env node',
    },
    plugins: [
      cjs({
        exclude: Object.keys(dependencies),
      }),
      json(),
    ],
  },
]
