import {parserToLoader} from '../utils'
import * as parsers from '../parser'

import esm from './esm'

const yaml = parserToLoader(parsers.yaml)
const json5 = parserToLoader(parsers.json5)
const toml = parserToLoader(parsers.toml)
const js = esm
const cjs = esm
const json = esm

export {esm, yaml, json5, toml, js, cjs, json}
