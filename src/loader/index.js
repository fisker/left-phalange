import {parserToLoader, wrap, interopDefault} from '../utils'
import * as parsers from '../parser'
import cjs from './cjs'
import esmRequire from './esm-require'

const esmLoader = wrap(esmRequire, interopDefault)

const yaml = parserToLoader(parsers.yaml)
const json5 = parserToLoader(parsers.json5)
const toml = parserToLoader(parsers.toml)
const ini = parserToLoader(parsers.ini)
const json = parserToLoader(parsers.json)
const esm = esmLoader
const js = esmLoader

export {esm, yaml, json5, toml, js, cjs, json, ini}
