import {extname} from 'path'
import esmLoader from './loaders/esm'
import json5Loader from './loaders/json5'
import yamlLoader from './loaders/yaml'
import tomlLoader from './loaders/toml'

const resolverByType = {
  esm: esmLoader,
  cjs: esmLoader,
  json: esmLoader,
  json5: json5Loader,
  yaml: yamlLoader,
  toml: tomlLoader,
}

const resolverByExtension = {
  '.mjs': esmLoader,
  '.js': esmLoader,
  '.json': esmLoader,
  '.json5': json5Loader,
  '.yaml': yamlLoader,
  '.toml': tomlLoader,
}

function load(file, format) {
  const loader = format
    ? resolverByType[format]
    : resolverByExtension[extname(file)]
  return loader(file)
}

export default load
