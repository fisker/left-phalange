import {writeSync as copyToClipboard} from 'clipboardy'
import cli from './cli'
import update from './update'
import input from './input'
import output from './output'

async function main(cli) {
  const data = await input(cli)

  if (typeof data === 'undefined') {
    return cli.showHelp(0)
  }

  const result = output(cli, data)

  const {copy} = cli.flags

  if (copy) {
    copyToClipboard(result)
  } else {
    console.log(result)
  }
}

update()
main(cli)
