import {extname} from 'path'
import * as loaders from './loader'
import {getFileType} from './utils'

function loadFile(file, type) {
  type = type || getFileType(file)
  return loaders[type](file)
}

export default loadFile
