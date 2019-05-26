export default require('esm')(module, {
  cjs: {
    cache: false,
    extensions: false,
    interop: false,
    mutableNamespace: false,
    namedExports: false,
    paths: false,
    vars: true,
  },
  force: true,
  mode: 'all',
})
