import json5Printer from './json5'
import {wrap} from '../utils'

export default wrap(json5Printer, string => `module.exports = ${string};`)
