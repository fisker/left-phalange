# left-phalange

> Convert data between CommonJS, ESModule, INI, JSON, JSON5, TOML, YAML

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
    $ left-phalange <file>
    $ lp <file>

  Options
    -i, --input           Input Data type
    -o, --output          Output Data type
    -p, --pretty          Pretty output
    -C, --copy            Copy output to clipboard
    -h, --help            Show this help info
    -v, --version         Show version

  Examples
    $ lp data.toml > data.json
    $ cat data.yaml | lp -p
```

## Options

### input

- cjs (CommonJS, file only, not stdin)
- esm (ESModule, file only, not stdin)
- ini
- js (CommonJS or ESModule, file only, not stdin)
- json
- json5
- toml
- yaml (default value for Stdin, `YAML` is superset of `JSON`, so it should work for `JSON` as well)

### output

- cjs
- esm
- ini
- json (default)
- json5
- toml
- yaml

## Related

- [left-phalange-api](https://github.com/fisker/left-phalange-api) - API for this module

## License

MIT © [fisker Cheung](https://github.com/fisker)
