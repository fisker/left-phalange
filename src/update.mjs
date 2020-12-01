import updateNotifier from 'update-notifier'
import importCommonJs from 'import-commonjs'

const require = importCommonJs(import.meta.url)

function update() {
  updateNotifier({pkg: require('../package.json')}).notify()
}

export default update
