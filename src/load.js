import {join, isAbsolute} from 'path'
import {load} from 'left-phalange-api'

function loadFileData(file, {input} = {}) {
  file = isAbsolute(file) ? file : join(process.cwd(), file)
  const data = load(file, {
    type: input,
  })
  return data
}

export default loadFileData
