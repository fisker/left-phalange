import {readFileSync} from 'fs'

function parserToLoader(parser) {
  return function loader(file) {
    const content = readFileSync(file)

    return parser(content)
  }
}

export default parserToLoader
