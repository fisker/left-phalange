import {readFileSync} from 'fs'

function parserToLoader(parser) {
  return function loader(filename) {
    const content = readFileSync(filename)

    return parser(content, {filename})
  }
}

export default parserToLoader
