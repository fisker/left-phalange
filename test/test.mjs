import fs from 'fs'
import path from 'path'
import test from 'ava'
import execa from 'execa'
import {
  writeSync as writeClipboard,
  readSync as readClipboard,
} from 'clipboardy'

const dirname = path.join(process.cwd(), 'test')
const filename = path.join(dirname, 'test.mjs')

const packageJson = JSON.parse(fs.readFileSync(path.join(dirname, '../package.json')))

execa.commandSync('chmod +x ../dist/cli', {
  cwd: dirname,
})

function run({file, stdin, flags = {}}) {
  const arguments_ = Object.entries(flags)
    .reduce(
      (all, [key, value]) => {
        if (typeof value === 'boolean') {
          return [...all, value ? `--${key}` : '']
        }

        return [...all, `--${key}`, value]
      },
      [file]
    )
    .filter(Boolean)

  return execa.sync('node', ['../src/index.mjs', ...arguments_], {
    cwd: dirname,
    input: stdin,
  })
}

test('Should print json file', (t) => {
  const result = run({
    file: '../package.json',
  })

  t.is(result.stdout, JSON.stringify(packageJson))
})

test('Should accept stdin', (t) => {
  const result = run({
    stdin: '{"left": "phalange"}',
  })

  t.is(result.stdout, '{"left":"phalange"}')
})

test('Should print pretty', (t) => {
  const result = run({
    file: '../package.json',
    flags: {
      pretty: true,
    },
  })

  t.is(result.stdout, JSON.stringify(packageJson, null, 2))
})

test('Should accept TOML', (t) => {
  const result = run({
    stdin: 'left= "phalange"',
    flags: {
      input: 'toml',
    },
  })

  t.is(result.stdout, '{"left":"phalange"}')
})

test('Should print as TOML', (t) => {
  const result = run({
    stdin: '{"left": "phalange"}',
    flags: {
      output: 'toml',
    },
  })

  t.is(result.stdout, 'left = "phalange"\n')
})

test('Should copy to clipboard', (t) => {
  const time = new Date().toISOString()
  writeClipboard(time)
  t.is(readClipboard(), time)

  const result = run({
    file: '../package.json',
    flags: {
      copy: true,
    },
  })
  t.is(result.stdout, 'copied')
  t.is(readClipboard(), JSON.stringify(packageJson))
})

test('Should show help when no input', (t) => {
  const result = run({})

  t.true(result.stdout.includes('Examples'))
})

test('Should throw on parse error', (t) => {
  t.throws(() => {
    run({
      file: filename,
    })
  })
})

test('Should throw on non-exists file', (t) => {
  t.throws(() => {
    run({
      file: 'left.phalange',
    })
  })
})
