import {stringify} from 'left-phalange-api'

function output(cli, data) {
  const {flags = {}} = cli
  const {output, pretty} = flags
  const result = stringify(data, {
    type: output,
    pretty,
  })

  return result
}

export default output
