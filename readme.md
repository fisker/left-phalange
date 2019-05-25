# left-phalange

> Convert data between ESModule, CommonJS, JSON, JSON5, YAML, TOML

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
    -i, --input           Input file type
    -o, --output          Output file type
    -p, --pretty          Pretty output
    -C, --copy            Copy output to clipboard
    -h, --help            Show this help info
    -v, --version         Show version

  Examples
    $ lp data.toml > foo.json
    $ cat data.yaml | lp -p
```

## License

MIT © [fisker Cheung](https://github.com/fisker)
