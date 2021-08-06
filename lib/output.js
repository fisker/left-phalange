import {stringify} from 'left-phalange-api'

async function output(cli, data) {
  const {flags} = cli
  const {output, pretty} = flags
  const result = await stringify(data, {
    type: output,
    pretty,
  })

  return result
}

export default output
