import {parse} from 'json5'

function json5Parser(content, options) {
  return parse(content)
}

export default json5Parser
