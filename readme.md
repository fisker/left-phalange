# left-phalange

> Convert data between CommonJS, ESModule, INI, JSON, JSON5, TOML, YAML

## Install

```sh
npm install --global left-phalange
```

## Quick start

```sh
curl -L https://unpkg.com/left-phalange/package.json | lp -o toml
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

## License

MIT © [fisker Cheung](https://github.com/fisker)
