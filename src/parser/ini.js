import {decode} from 'ini'

function iniParser(content) {
  return decode(String(content))
}

export default iniParser
