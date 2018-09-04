# FLT: Format, Lint, Test

An all-in-one opinionated package for javascript code formatting, linting, and testing.
Uses prettier, eslint, standard, and mocha.

I was tired of installing ~10 dependenies and copying the same scripts into every project in order to get clean, dependable, and tested code.

## Usage

Run format, lint & test with recommended options:

```
flt
```

Run just formatting (prettier) with recommended options:

```
flt format
```

Run just linting (eslint) with recommended options:

```
flt lint
```

Run just tests (mocha) with recommended options:

```
flt test
```

If you supply your own arguments, they get passed through to the underlying module instead of the recommended options. Which is still a convenience because you only need to install the `flt` dependency instead of everything else.

`flt format *.js --single-quote` is the same as running `prettier *.js --single-quote`
