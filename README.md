## tap-given

[![Build Status](https://secure.travis-ci.org/dex4er/js-tap-given.svg)](http://travis-ci.org/dex4er/js-tap-given) [![Coverage Status](https://coveralls.io/repos/github/dex4er/js-tap-given/badge.svg)](https://coveralls.io/github/dex4er/js-tap-given) [![npm](https://img.shields.io/npm/v/tap-given.svg)](https://www.npmjs.com/package/tap-given)

This module provides [tap](https://www.npmjs.com/package/tap) API with
[Mocha-like DLS](http://www.node-tap.org/mochalike/) as Given-When-Then style
for BDD tests.

### Requirements

This module requires Node >= 4.

### Installation

```shell
npm install tap-given
```

### Usage

__Feature__: TDD in Given-When-Then style

__Scenario__: Basic scenario

__Given__ `examples/test.js` file:

```js
const t = require('tap')
require('tap-given')(t)
require('chai').should()

Feature('TDD in Given-When-Then style for TAP', () => {
  Scenario('Basic scenario', () => {
    let a, b, c

    Given('first value', () => {
      a = 2
    })

    And('second value', () => {
      b = 21
    })

    When('I do multiplication operation', () => {
      c = a * b
    })

    Then('the result is correct', () => {
      c.should.equal(42)
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
  Feature: TDD in Given-When-Then style for TAP
    Scenario: Basic scenario
      ✓ Given first value
      ✓   ‎‎And second value
      ✓  ‎When I do multiplication operation
      ✓  ‎Then the result is correct


  4 passing (233.031ms)
```

### Functions

`Feature` function is an alias to `describe` function and might be optional.

`Scenario` function is an alias to `context` function. It usually provides a
context for its steps then real `function () {}` might be used instead arrow
`() => {}` notation.

`Given`, `When`, `Then` and `And` functions are aliases to `it` function.

`Before`, `beforeEach`, `After` and `afterEach` functions are also provided
and are optional.

All functions except `BeforeEach` and `AfterEach` add some prefix to the
description of the step.

### Linter

Install `eslint-plugin-tap-given` module and use in `package.json`:

```js
{
  "standard": {
    "plugins": [ "tap-given" ],
    "env": [ "tap-given/tap-given" ]
  }
}
```

or:

```js
{
  "eslintConfig": {
    "plugins": [ "tap-given" ],
    "env": {
      "tap-given/tap-given": true
    }
  }
}
```

Without plugin:

```js
{
  "standard": {
    "globals": [
      "After",
      "AfterEach",
      "And",
      "Before",
      "BeforeEach",
      "Feature",
      "Given",
      "Scenario",
      "Then",
      "When"
    ]
  }
}
```

or:

```js
/* global Feature, Scenario, Given, When, Then, And, Before, BeforeEach, After, AfterEach */
```

### License

Copyright (c) 2017 Piotr Roszatycki <piotr.roszatycki@gmail.com>

[MIT](https://opensource.org/licenses/MIT)
