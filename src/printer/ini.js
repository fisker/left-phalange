import {encode} from 'ini'

function iniPrinter(data, {pretty = false} = {}) {
  return encode(data, {
    whitespace: pretty,
  })
}

export default iniPrinter
