import meow from 'meow'
import updateNotifier from 'update-notifier'
import colors from 'ansi-colors'
import {join, isAbsolute} from 'path'
import getStdin from 'get-stdin'
import {writeSync as copyToClipboard} from 'clipboardy'
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
    -C, --copy            ${colors.cyan('Copy output to clipboard')}
    -h, --help            ${colors.cyan('Show this help info')}
    -v, --version         ${colors.cyan('Show version')}

  Examples
    $ lp data.toml > foo.json
    $ cat data.yaml | lp -p
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
      copy: {
        type: 'boolean',
        default: false,
        alias: 'C',
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
  {
    pretty = false,
    input: inputType,
    output: outputType = 'json',
    copy = false,
  } = {}
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
    showResult(input, output, copy)
  } else {
    getStdin().then(content => {
      if (content) {
        input.content = content
        showResult(input, output, copy)
      } else {
        cli.showHelp()
      }
    })
  }
}

function showResult(input, output, copy) {
  const result = transform(input, output)

  if (copy) {
    copyToClipboard(result)
  } else {
    console.log(result)
  }
}

processor(cli.input[0], cli.flags)
