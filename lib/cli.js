import meow from 'meow'
import colors from 'ansi-colors'

const cli = meow(
  `
  Usage
    left-phalange <file>
    lp <file>

  Options
    -i, --input           ${colors.cyan('Input Data type')}
    -o, --output          ${colors.cyan('Output Data type')}
    -p, --pretty          ${colors.cyan('Pretty output')}
    -C, --copy            ${colors.cyan('Copy output to clipboard')}
    -h, --help            ${colors.cyan('Show this help info')}
    -v, --version         ${colors.cyan('Show version')}

  Examples
    lp data.toml > data.json
    cat data.yaml | lp -p
  `,
  {
    importMeta: import.meta,
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
  },
)

export default cli
