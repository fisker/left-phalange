import meow from 'meow'
import updateNotifier from 'update-notifier'
import colors from 'ansi-colors'
import {join, isAbsolute} from 'path'
import getStdin from 'get-stdin'
import transform from '.'

updateNotifier({pkg: require('../package.json')}).notify()

const cli = meow(
  `
  Usage
    $ left-phalange <file>
    $ lp <file>

  Options
    -i, --input           ${colors.cyan('Input file type')}
    -o, --output          ${colors.cyan('Output file type')}
    -p, --pretty          ${colors.cyan('Pretty output')}
    -h, --help            ${colors.cyan('Show this help info')}
    -v, --version         ${colors.cyan('Show version')}

  Examples
    $ lp foo.js > foo.json
    $ cat foo.js | lp -p
`,
  {
    flags: {
      pretty: {
        type: 'boolean',
        default: false,
        alias: 'p',
      },
      input: {
        alias: 'i',
      },
      output: {
        alias: 'o',
      },
      help: {
        alias: 'h',
      },
      version: {
        alias: 'v',
      },
    },
  }
)

function processor(
  file,
  {pretty = false, input: inputType, output: outputType = 'json'} = {}
) {
  const input = {
    type: inputType,
  }

  const output = {
    type: outputType,
    pretty,
  }

  if (file) {
    file = isAbsolute(file) ? file : join(process.cwd(), file)
    input.file = file
    console.log(transform(input, output))

    return
  }

  getStdin().then(content => {
    input.content = content
    console.log(transform(input, output))
  })
}

processor(cli.input[0], cli.flags)
