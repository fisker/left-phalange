const esmRequire = require('esm')(module)

function esmLoader(file) {
  const module = esmRequire(file)

  if (typeof module === 'object' && 'default' in module) {
    return module.default
  }

  return module
}

export default esmLoader
