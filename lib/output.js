import leftPhalange from 'left-phalange-api'

const {stringify} = leftPhalange

function output(cli, data) {
  const {flags} = cli
  const {output, pretty} = flags
  const result = stringify(data, {
    type: output,
    pretty,
  })

  return result
}

export default output
