import getStdin from 'get-stdin'
import cli from './cli'
import load from './load'
import stringify from './stringify'
import parse from './parse'
import showResult from './show-result'
import update from './update'

async function getData() {
  const {input, flags} = cli

  const content = await getStdin()

  if (content) {
    return parse(content, flags)
  }

  const [file] = input

  if (file) {
    return load(file, flags)
  }

  return false
}

async function main() {
  const data = await getData()

  if (data === false) {
    return cli.showHelp()
  }

  const {flags} = cli
  const result = stringify(data, flags)
  return showResult(result, flags)
}

update()
main()
