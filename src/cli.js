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
    --pretty, -p
      ${colors.cyan('pretty output')}
    --input, -i
      ${colors.cyan('input file type')}
    --output, -o
      ${colors.cyan('output file type')}

  Examples
    $ lp foo.js > foo.json
`,
  {
    flags: {
      pretty: {
        type: 'boolean',
        default: false,
        alias: 'r',
      },
      input: {
        alias: 'i',
      },
      output: {
        alias: 'o',
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
