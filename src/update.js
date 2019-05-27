import updateNotifier from 'update-notifier'

function update() {
  updateNotifier({pkg: require('../package.json')}).notify()
}

export default update
