import {existsSync} from 'fs'
import load from './load'
import parse from './parse'
import print from './print'

function transform(input, output = {}) {
  const {file, content, type} = input

  if (file && !existsSync(file)) {
    throw new Error(`file [${file}] not exists`)
  }

  const data = file ? load(file, type) : parse(content, type || 'json')

  return print(data, output)
}

export default transform
