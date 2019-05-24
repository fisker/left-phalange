'use strict';

var fs = require('fs');
var path = require('path');
var jsYaml = require('js-yaml');
var json5$1 = require('json5');
var toml$1 = require('toml');

function parserToLoader(parser) {
  return function loader(file) {
    const content = fs.readFileSync(file);

    return parser(content)
  }
}

const esmRequire = require('esm')(module);

function esmLoader(file) {
  const module = esmRequire(file);

  if (typeof module === 'object' && 'default' in module) {
    return module.default
  }

  return module
}

const yaml = parserToLoader(jsYaml.load);
const json5 = parserToLoader(json5$1.parse);
const toml = parserToLoader(toml$1.parse);

var loaders = /*#__PURE__*/Object.freeze({
  yaml: yaml,
  json5: json5,
  toml: toml,
  esm: esmLoader
});

const resolverByType = {
  ...loaders,
  cjs: esmLoader,
  json: esmLoader,
};

const resolverByExtension = {
  '.mjs': esmLoader,
  '.js': esmLoader,
  '.json': esmLoader,
  '.json5': json5,
  '.yaml': yaml,
  '.toml': toml,
};

function loadFile(file, format) {
  const loader = format
    ? resolverByType[format]
    : resolverByExtension[path.extname(file)];
  return loader(file)
}

function parse(content, format) {
  return parser[format](content)
}

function jsonPrinter(data, {pretty = false} = {}) {
  return pretty ? JSON.stringify(data, null, 2) : JSON.stringify(data)
}

function yamlPrinter(data, options) {
  return jsYaml.dump(data)
}



var printers = /*#__PURE__*/Object.freeze({
  json: jsonPrinter,
  yaml: yamlPrinter
});

function print(data, {type, ...options}) {
  return printers[type](data, options)
}

function transform(input, output) {
  const {file, content, type} = input;

  if (file && !fs.existsSync(file)) {
    throw new Error(`file [${file}] not exists`)
  }

  const data = file ? loadFile(file, type) : parse(content, type);

  return print(data, output)
}

module.exports = transform;
