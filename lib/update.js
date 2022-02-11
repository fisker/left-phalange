import updateNotifier from 'update-notifier'
import createEsmUtils from 'esm-utils'

const {readJson} = createEsmUtils(import.meta)

async function update() {
  updateNotifier({pkg: await readJson('../package.json')}).notify()
}

export default update
