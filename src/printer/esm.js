import jsonPrinter from './json'

function esmPrinter(data, options) {
  const jsonString = jsonPrinter(data, options)
  return `export default ${jsonString};`
}

export default esmPrinter
