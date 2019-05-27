import {parse} from 'left-phalange-api'

function parseData(content, {input} = {}) {
  return parse(content, {
    type: input,
  })
}

export default parseData
