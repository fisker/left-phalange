import test from 'ava'
import {join} from 'path'
import {readdirSync} from 'fs'
import transform from '../src'

function transformFile(file, format) {
  return transform({
    file: join(__dirname, 'fixtures', file),
    format,
  })
}

const files = readdirSync(join(__dirname, 'fixtures'))
const result = '{"fisker":"jerk"}'

for (const file of files) {
  test(file, t => {
    t.is(transformFile(file), result)
  })
}
