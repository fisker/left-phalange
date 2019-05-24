import * as printers from './printer'

function print(data, {type = 'json', ...options}) {
  console.log({
    printers,
    type,
  })
  return printers[type](data, options)
}

export default print
