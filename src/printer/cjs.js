import jsonPrinter from './json'

function cjsPrinter(data, options) {
  const jsonString = jsonPrinter(data, options)
  return `module.exports = ${jsonString};`
}

export default cjsPrinter
