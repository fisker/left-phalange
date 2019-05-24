const esmRequire = require('esm')(module)

function esmLoader(file) {
  const module = esmRequire(file)

  return module && typeof module === 'object' && 'default' in module
    ? module.default
    : module
}

export default esmLoader
