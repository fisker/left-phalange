import {parse} from '@iarna/toml'

function tomlParser(content, options) {
  return parse(content)
}

export default tomlParser
