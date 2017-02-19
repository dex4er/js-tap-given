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

__Given__ `examples/test.js` file:

```js
/* global Feature, Scenario, Given, When, Then */
const t = require('tap')
require('tap-given')(t)
require('chai').should()

Feature('Test script', () => {
  Scenario('Given-When-Then scenario', function () {
    Given('some property in current context', () => {
      this.property = 42
    })

    When('I do something with the property in current context', () => {
      this.property /= 2
    })

    Then('the property in current context has correct value', done => {
      this.property.should.equal(21)
      done()
    })
  })
})
```

__When__ I run `tap` command:

```sh
$ tap -R spec examples/test.js
```

__Then__ following output is produced:

```
examples/test.js
  Feature: Test script
    Scenario: Given-When-Then scenario
      ✓ Given some property in current context
      ✓ When I do something with the property in current context
      ✓ Then the property in current context has correct value


  3 passing (234.754ms)
```

### Functions

`Feature` function is an alias to `describe` function and might be optional.

`Scenario` function is an alias to `context` function. It usually provides a
context for its steps then real `function () {}` should be used instead arrow
`() => {}` notation.

`Given`, `When` and `Then` functions are aliases to `it` function.

`Before`, `beforeEach`, `After` and `afterEach` functions are also provided
and are optional.

All functions (except `scenario` and `...Each`) add some prefix to the
description of the step.

### License

Copyright (c) 2017 Piotr Roszatycki <piotr.roszatycki@gmail.com>

[MIT](https://opensource.org/licenses/MIT)
