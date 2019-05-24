import {extname} from 'path'

const fileTypes = {
  mjs: 'esm',
  yml: 'yaml',
}

function getFileType(file) {
  const extension = extname(file).slice(1)

  return fileTypes[extension] || extension
}

export default getFileType
