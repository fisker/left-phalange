import test from 'ava'
import execa from 'execa'
import {readSync as readClipboard} from 'clipboardy'

const packageJson = require('../package.json')

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

  return execa.sync('../bin/cli', arguments_, {
    cwd: __dirname,
    input: stdin,
  })
}

test('file', t => {
  const result = run({
    file: '../package.json',
  })

  t.is(result.stdout, JSON.stringify(packageJson))
})

test('stdin', t => {
  const result = run({
    stdin: '{"left": "phalange"}',
  })

  t.is(result.stdout, '{"left":"phalange"}')
})

test('flags.pretty', t => {
  const result = run({
    file: '../package.json',
    flags: {
      pretty: true,
    },
  })

  t.is(result.stdout, JSON.stringify(packageJson, null, 2))
})

test('flags.input', t => {
  const result = run({
    stdin: 'left= "phalange"',
    flags: {
      input: 'toml',
    },
  })

  t.is(result.stdout, '{"left":"phalange"}')
})

test('flags.output', t => {
  const result = run({
    stdin: '{"left": "phalange"}',
    flags: {
      output: 'toml',
    },
  })

  t.is(result.stdout, 'left = "phalange"\n')
})

test('flags.copy', t => {
  const result = run({
    file: '../package.json',
    flags: {
      copy: true,
    },
  })

  t.is(result.stdout, '')
  t.is(readClipboard(), JSON.stringify(packageJson))
})

test(`should throw on parse error`, t => {
  t.throws(() => {
    run({
      file: __filename,
    })
  })
})

test('should throw on non-exists file', t => {
  t.throws(() => {
    run({
      file: 'left.phalange',
    })
  })
})
