#!/usr/bin/env node
import clipboardy from 'clipboardy'
import cli from './cli.js'
import update from './update.js'
import input from './input.js'
import output from './output.js'

const {writeSync: copyToClipboard} = clipboardy

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

main(cli)
update()
