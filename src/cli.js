import meow from 'meow'
import updateNotifier from 'update-notifier'
import colors from 'ansi-colors'
import {join} from 'path'
import load from './load'
import print from './print'

const cli = meow(
  `
  Usage
    $ left-phalange file
    $ lp file

  Options
    --pretty ${colors.cyan('pretty output')}
    --input ${colors.cyan('input file type')}
    --output ${colors.cyan('output file type')}

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

function processor(file, {pretty = false, input, output = 'json'} = {}) {
  file = join(process.cwd(), file)
  const data = load(file, input)
  const result = print(data, output, {pretty})

  console.log(result)
}

processor(cli.input[0], cli.flags)
