# left-phalange

> Convert data between ESModule, CommonJS, JSON, JSON5, YAML, TOML

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
    $ lp data.toml > foo.json
    $ cat data.yaml | lp -p
```

## Options

### input

- esm (file only, not stdin)
- js (file only, not stdin)
- cjs (file only, not stdin)
- json
- json5
- yaml (default value for stdin, YAML is superset of json, so it should work for JSON as well)
- toml

### output

- esm
- cjs
- json (default)
- json5
- yaml
- toml

## License

MIT © [fisker Cheung](https://github.com/fisker)
