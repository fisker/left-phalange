import * as parsers from './parser'

function parse(content, format) {
  return parsers[format](content)
}

export default parse
