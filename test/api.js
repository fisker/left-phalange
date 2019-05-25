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
const INI_LINE_FEED = process.platform === 'win32' ? '\r\n' : '\n'
const results = {
  json: '{"fisker":"jerk"}',
  yaml: `fisker: jerk
`,
  toml: `fisker = "jerk"
`,
  json5: "{fisker:'jerk'}",
  cjs: "module.exports = {fisker:'jerk'};",
  esm: "export default {fisker:'jerk'};",
  ini: `fisker=jerk${INI_LINE_FEED}`,
}

const prettyResults = {
  json: `{
  "fisker": "jerk"
}`,
  yaml: `fisker: jerk
`,
  toml: `fisker = "jerk"
`,
  json5: `{
  fisker: 'jerk',
}`,
  cjs: `module.exports = {
  fisker: 'jerk',
};`,
  esm: `export default {
  fisker: 'jerk',
};`,
  ini: `fisker = jerk${INI_LINE_FEED}`,
}

for (const file of files) {
  test(`FILE: ${file}`, t => {
    t.is(transformFile(file), results.json)
  })
}

for (const file of files.filter(file => extname(file).slice(1) in parsers)) {
  test(`CONTENT: ${file}`, t => {
    t.is(transformFileContent(file), results.json)
  })
}

for (const [type, result] of Object.entries(results)) {
  test(`Output as ${type}`, t => {
    t.is(transformFile('json.json', {type}), result)
  })
}

for (const [type, result] of Object.entries(prettyResults)) {
  test(`pretty: ${type}`, t => {
    t.is(transformFile('json.json', {type, pretty: true}), result)
  })
}

test(`CONTENT: without input type should tread as yaml`, t => {
  t.is(
    transform({
      content: `{"fisker":"jerk"}`,
    }),
    results.json
  )
})

test(`CONTENT: without input type should throws`, t => {
  t.throws(() => {
    transform({
      content: `
[scope]
fisker = "jerk"
`,
    })
  })
})

test('should throw on non-exists file', t => {
  t.throws(() => {
    transformFile('fisker')
  })
})
