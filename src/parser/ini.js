import {decode} from 'ini'

function iniParser(content, options) {
  return decode(String(content))
}

export default iniParser
