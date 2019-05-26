import load from './load'
import parse from './parse'
import stringify from './stringify'

function transform(input, output = {}) {
  const {file, content, type} = input

  const data = file ? load(file, type) : parse(content, type)

  return stringify(data, output)
}

export default transform
