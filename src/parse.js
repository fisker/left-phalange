import * as parsers from './parser'

function parse(content, type = 'yaml') {
  return parsers[type](content)
}

export default parse
