import {extname} from 'path'
import * as loaders from './loader'

const resolverByType = {
  ...loaders,
  cjs: loaders.esm,
  json: loaders.esm,
}

const resolverByExtension = {
  '.mjs': loaders.esm,
  '.js': loaders.esm,
  '.json': loaders.esm,
  '.json5': loaders.json5,
  '.yaml': loaders.yaml,
  '.toml': loaders.toml,
}

function loadFile(file, format) {
  const loader = format
    ? resolverByType[format]
    : resolverByExtension[extname(file)]
  return loader(file)
}

export default loadFile
