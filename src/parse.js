import * as parsers from './parser'

function parse(content, type) {
  return parsers[type](content)
}

export default parse
