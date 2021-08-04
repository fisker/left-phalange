import updateNotifier from 'update-notifier'
import createEsmUtils from 'esm-utils'

const {json} = createEsmUtils(import.meta)

async function update() {
  updateNotifier({pkg: await json.load('../package.json')}).notify()
}

export default update
