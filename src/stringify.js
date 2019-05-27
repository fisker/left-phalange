import {stringify} from 'left-phalange-api'

function stringifyData(data, {output, pretty} = {}) {
  return stringify(data, {
    type: output,
    pretty,
  })
}

export default stringifyData
