import test from 'ava'
import {join, extname} from 'path'
import {readdirSync, readFileSync} from 'fs'

import transform from '../src'
import * as parsers from '../src/parser'

function transformFile(file, output = {}) {
  return transform(
    {
      file: join(__dirname, 'fixtures', file),
    },
    output
  )
}

function transformFileContent(file, output = {}) {
  return transform(
    {
      content: readFileSync(join(__dirname, 'fixtures', file)),
      type: extname(file).slice(1),
    },
    output
  )
}

const files = readdirSync(join(__dirname, 'fixtures'))
const results = {
  json: '{"fisker":"jerk"}',
  yaml: 'fisker: jerk',
}

for (const file of files) {
  test(`FILE: ${file}`, t => {
    t.is(transformFile(file), results.json)
  })

  if (extname(file).slice(1) in parsers) {
    test(`CONTENT: ${file}`, t => {
      t.is(transformFileContent(file), results.json)
    })
  }
}

for (const [type, result] of Object.entries(results)) {
  test(`Output as ${type}`, t => {
    t.is(transformFile('json.json', {type}).trim(), results[type].trim())
  })
}
