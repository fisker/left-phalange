import path from 'path'
import getStdin from 'get-stdin'
import leftPhalange from 'left-phalange-api'

const {load, parse} = leftPhalange
const {join, isAbsolute} = path

async function input(cli) {
  const {input, flags} = cli

  const content = await getStdin()

  if (content) {
    return parse(content, {
      type: flags.input,
    })
  }

  let [file] = input

  if (file) {
    file = isAbsolute(file) ? file : join(process.cwd(), file)
    return load(file, {
      type: flags.input,
    })
  }
}

export default input
