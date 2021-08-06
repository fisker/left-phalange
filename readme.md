# left-phalange

> Convert data between YAML, TOML, JSON, JSON5, INI, CSV, ES Module, CommonJS

## Quick Overview

```sh
echo left="phalange" | npx left-phalange --input toml --pretty
```

## Install

```sh
npm install --global left-phalange
```

## Usage

```text
lp --help

  Usage
    left-phalange <file>
    lp <file>

  Options
    -i, --input           Input Data type
    -o, --output          Output Data type
    -p, --pretty          Pretty output
    -C, --copy            Copy output to clipboard
    -h, --help            Show this help info
    -v, --version         Show version

  Examples
    lp data.toml > data.json
    cat data.yaml | lp -p
```

## Options

### input

- yaml (default value for Stdin, `YAML` is superset of `JSON`, so it should work for `JSON` as well)
- json
- ini
- js (CommonJS or ESModule, file only, not stdin)
- json5
- toml
- csv
- esm (ESModule, file only, not stdin)
- cjs (CommonJS, file only, not stdin)

### output

- json (default)
- yaml
- ini
- json5
- toml
- csv
- cjs
- esm

## Related

- [left-phalange-api](https://github.com/fisker/left-phalange-api) - API for this module
