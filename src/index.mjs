import {writeSync as copyToClipboard} from 'clipboardy'
import cli from './cli.mjs'
import update from './update.mjs'
import input from './input.mjs'
import output from './output.mjs'

async function main(cli) {
  const data = await input(cli)

  if (typeof data === 'undefined') {
    return cli.showHelp(0)
  }

  const result = output(cli, data)

  const {copy} = cli.flags

  if (copy) {
    copyToClipboard(result)
    console.log('copied')
  } else {
    console.log(result)
  }
}

update()
main(cli)
