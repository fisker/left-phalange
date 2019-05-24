import * as printers from './printer'

function print(data, {type = 'json', ...options}) {
  return printers[type](data, options)
}

export default print
