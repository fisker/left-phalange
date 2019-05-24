import {parserToLoader} from '../utils'
import esm from './esm'

import {
  yaml as yarmParser,
  json5 as json5Parser,
  toml as tomlParser,
} from '../parser'

const yaml = parserToLoader(yarmParser)
const json5 = parserToLoader(json5Parser)
const toml = parserToLoader(tomlParser)
const js = esm
const cjs = esm
const json = esm

export {esm, yaml, json5, toml, js, cjs, json}
