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

```js
/* global scenario, given, when, then */
require('tap-given')
require('chai').should()

scenario('given-when-then basic scenario', function () {
  given('some property in current context', () => {
    this.property = 42
  })

  when('I do something with property in current context', () => {
    this.property /= 2
  })

  then('property in current context has correct value', done => {
    this.property.should.equal(21)
    done()
  })
})
```

### License

Copyright (c) 2017 Piotr Roszatycki <piotr.roszatycki@gmail.com>

[MIT](https://opensource.org/licenses/MIT)
