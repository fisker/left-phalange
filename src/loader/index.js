import {parserToLoader} from '../utils'
import esm from './esm'

import * as parsers from '../parser'

const yaml = parserToLoader(parsers.yaml)
const json5 = parserToLoader(parsers.json5)
const toml = parserToLoader(parsers.toml)
const js = esm
const cjs = esm
const json = esm

export {esm, yaml, json5, toml, js, cjs, json}
