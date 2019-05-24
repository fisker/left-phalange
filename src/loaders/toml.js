import {parse} from 'toml'

import {readFileSync} from 'fs'

function tomlLoader(file) {
  const content = readFileSync(file)

  return parse(content)
}

export default tomlLoader
