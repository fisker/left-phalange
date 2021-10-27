#!/usr/bin/env node
import clipboardy from 'clipboardy'
import cli from './cli.js'
import update from './update.js'
import input from './input.js'
import output from './output.js'

const copyToClipboard = clipboardy.write

async function main(cli) {
  const data = await input(cli)

  if (typeof data === 'undefined') {
    return cli.showHelp(0)
  }

  const result = await output(cli, data)

  const {copy} = cli.flags

  if (copy) {
    await copyToClipboard(result)
    console.log('copied')
  } else {
    console.log(result)
  }
}

main(cli)
update()
