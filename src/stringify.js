import * as printers from './printer'

function stringify(data, {type = 'json', ...options}) {
  return printers[type](data, options)
}

export default stringify
