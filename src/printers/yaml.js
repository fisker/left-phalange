import {dump} from 'js-yaml'

function yamlPrinter(data, options) {
  return dump(data)
}

export default yamlPrinter
