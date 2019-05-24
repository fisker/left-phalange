'use strict';

var fs = require('fs');
var path = require('path');
var jsYaml = require('js-yaml');
var json5$1 = require('json5');
var toml$1 = require('@iarna/toml');

function parserToLoader(parser) {
  return function loader(file) {
    const content = fs.readFileSync(file);

    return parser(content)
  }
}

const fileTypes = {
  mjs: 'esm',
  yml: 'yaml',
};

function getFileType(file) {
  const extension = path.extname(file).slice(1);

  return fileTypes[extension] || extension
}

const esmRequire = require('esm')(module);

function esmLoader(file) {
  const module = esmRequire(file);

  if (typeof module === 'object' && 'default' in module) {
    return module.default
  }

  return module
}



var parsers = /*#__PURE__*/Object.freeze({
  yaml: jsYaml.safeLoad,
  json5: json5$1.parse,
  toml: toml$1.parse
});

const yaml = parserToLoader(jsYaml.safeLoad);
const json5 = parserToLoader(json5$1.parse);
const toml = parserToLoader(toml$1.parse);
const js = esmLoader;
const cjs = esmLoader;
const json = esmLoader;

var loaders = /*#__PURE__*/Object.freeze({
  esm: esmLoader,
  yaml: yaml,
  json5: json5,
  toml: toml,
  js: js,
  cjs: cjs,
  json: json
});

function loadFile(file, type) {
  type = type || getFileType(file);
  return loaders[type](file)
}

function parse(content, type) {
  return parsers[type](content)
}

function jsonPrinter(data, {pretty = false} = {}) {
  return pretty ? JSON.stringify(data, null, 2) : JSON.stringify(data)
}

function yamlPrinter(data, options) {
  return jsYaml.safeDump(data)
}

function tomlPrinter(data, options) {
  return toml$1.stringify(data)
}

function cjsPrinter(data, options) {
  const jsonString = jsonPrinter(data, options);
  return `module.exports = ${jsonString};`
}

function esmPrinter(data, options) {
  const jsonString = jsonPrinter(data, options);
  return `export default ${jsonString};`
}



var printers = /*#__PURE__*/Object.freeze({
  json: jsonPrinter,
  yaml: yamlPrinter,
  toml: tomlPrinter,
  cjs: cjsPrinter,
  esm: esmPrinter
});

function print(data, {type = 'json', ...options}) {
  return printers[type](data, options)
}

function transform(input, output = {}) {
  const {file, content, type} = input;

  if (file && !fs.existsSync(file)) {
    throw new Error(`file [${file}] not exists`)
  }

  const data = file ? loadFile(file, type) : parse(content, type);

  return print(data, output)
}

module.exports = transform;
