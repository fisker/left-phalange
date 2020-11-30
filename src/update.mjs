import updateNotifier from 'update-notifier'
import requireCommonJs from 'import-commonjs'

function update() {
  updateNotifier({pkg: requireCommonJs('../package.json')}).notify()
}

export default update
