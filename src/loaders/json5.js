import {readFileSync} from 'fs'
import {parse} from 'json5'

function json5Loader(file) {
  const content = readFileSync(file)

  return parse(content)
}
export default json5Loader
