import {parserToLoader} from '../utils'

import {
  yaml as yarmParser,
  json5 as json5Parser,
  toml as tomlParser,
} from '../parser'

const yaml = parserToLoader(yarmParser)
const json5 = parserToLoader(json5Parser)
const toml = parserToLoader(tomlParser)

export {default as esm} from './esm'
export {yaml, json5, toml}
