import jsonPrinter from './printers/json'
import yamlPrinter from './printers/yaml'

const printers = {
  json: jsonPrinter,
  yaml: yamlPrinter,
}

function print(data, format = 'json', options = {}) {
  return printers[format](data, options)
}

export default print
