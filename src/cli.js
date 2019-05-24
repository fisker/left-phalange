import meow from 'meow'
import updateNotifier from 'update-notifier'
import colors from 'ansi-colors'
import {join} from 'path'

const esmRequire = require('esm')(module)

updateNotifier({pkg: require('../package.json')}).notify()

const cli = meow(
  `
  Usage
    $ left-phalange file
    $ lp file

  Options
    --pretty ${colors.cyan('pretty output')}

  Examples
    $ lp foo.js > foo.json
`,
  {
    flags: {
      pretty: {
        type: 'boolean',
      },
    },
  }
)

function interopDefault(ex) {
  return ex && typeof ex === 'object' && 'default' in ex ? ex.default : ex
}

function print(file, {pretty = false} = {}) {
  const data = interopDefault(esmRequire(join(process.cwd(), file)))
  const string = JSON.stringify(data, null, pretty ? 2 : undefined)

  console.log(string)
}

print(cli.input[0], cli.flags)
