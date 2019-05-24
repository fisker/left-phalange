import {load} from 'js-yaml'
import {readFileSync} from 'fs'

function yamlLoader(file) {
  const content = readFileSync(file)

  return load(content)
}

export default yamlLoader
