import {stringify} from '@iarna/toml'

function tomlPrinter(data, options) {
  return stringify(data)
}

export default tomlPrinter
