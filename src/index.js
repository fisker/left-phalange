import getStdin from 'get-stdin'
import cli from './cli'
import load from './load'
import stringify from './stringify'
import parse from './parse'
import showResult from './show-result'
import update from './update'

update()

const file = cli.input[0]
const {flags} = cli

if (file) {
  const data = load(file, flags)
  const result = stringify(data, flags)
  showResult(result, flags)
} else {
  getStdin().then(content => {
    if (content) {
      const data = parse(content, flags)
      const result = stringify(data, flags)
      showResult(result, flags)
    } else {
      cli.showHelp()
    }
  })
}
