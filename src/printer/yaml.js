import {safeDump} from 'js-yaml'

function yamlPrinter(data, options) {
  return safeDump(data)
}

export default yamlPrinter
