## tap-given

[![Build Status](https://secure.travis-ci.org/dex4er/js-tap-given.svg)](http://travis-ci.org/dex4er/js-tap-given) [![Coverage Status](https://coveralls.io/repos/github/dex4er/js-tap-given/badge.svg)](https://coveralls.io/github/dex4er/js-tap-given) [![npm](https://img.shields.io/npm/v/tap-given.svg)](https://www.npmjs.com/package/tap-given)

This module provides [tap](https://www.npmjs.com/package/tap) API with
[Mocha-like DLS](http://www.node-tap.org/mochalike/) as Given-When-Then style
for BDD tests.

### Installation

```shell
npm install tap-given
```

### Usage

Given example test file:

```js
/* global scenario, given, when, then */
require('tap-given')
require('chai').should()

scenario('Given-When-Then scenario', function () {
  given('some property in current context', () => {
    this.property = 42
  })

  when('I do something with the property in current context', () => {
    this.property /= 2
  })

  then('the property in current context has correct value', done => {
    this.property.should.equal(21)
    done()
  })
})
```

When I run `tap` command:

```sh
$ -R spec tap example.js
```

Then following output is produced:

```
example/test.js
  Given-When-Then scenario
    ✓ Given some property in current context
    ✓ When I do something with the property in current context
    ✓ Then the property in current context has correct value


  3 passing (230.343ms)
```

### Functions

`scenario` function is an alias to `context` function.

`given`, `when` and `then` functions are aliases to `it` function.

`before`, `beforeEach`, `after` and `afterEach` functions are also provided.

### License

Copyright (c) 2017 Piotr Roszatycki <piotr.roszatycki@gmail.com>

[MIT](https://opensource.org/licenses/MIT)
