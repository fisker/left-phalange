import parseJson from 'parse-json'

function jsonParser(content, {filename = ''} = {}) {
  return filename ? parseJson(content, filename) : parseJson(content)
}

export default jsonParser
