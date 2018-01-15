# FLT: Format, Lint, Test

An all-in-one opinionated package for javascript code formatting, linting, and testing.
Uses prettier, eslint, standard, and mocha.

I was tired of installing ~10 dependenies and copying the same scripts into every project in order to get clean, dependable, and tested code.

## Usage

Run format, lint & test with recommended options:

```bash
$ flt all -r
```

Run just formatting (prettier) with recommended options:

```bash
$ flt format -r
```

Run just linting (eslint) with recommended options:

```bash
$ flt lint -r
```

Run just tests (mocha) with recommended options:

```bash
$ flt test -r
```

If you omit the recommended flag, you can then just add your own arguments and they get passed through to the underlying module. e.g.:

`flt format *.js --single-quote` is the same as running `prettier *.js --single-quote`
