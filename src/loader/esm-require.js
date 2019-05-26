export default require('esm')(module, {
  cjs: {
    cache: false,
    extensions: false,
    mutableNamespace: false,
    namedExports: false,
    vars: true,
  },
})
