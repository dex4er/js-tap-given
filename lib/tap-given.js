'use strict'

// tap trims unicode spaces so this is not a space character
const space = '\u200E'

function tapGiven (t) {
  global.Feature = (what, how) => {
    return t.mocha.describe('Feature: ' + what, how)
  }

  global.Scenario = (what, how) => {
    return t.mocha.context('Scenario: ' + what, how)
  }

  global.Given = (what, how) => {
    return t.mocha.it('Given ' + what, how)
  }
  global.When = (what, how) => {
    return t.mocha.it(space + 'When ' + what, how)
  }
  global.Then = (what, how) => {
    return t.mocha.it(space + 'Then ' + what, how)
  }
  global.And = (what, how) => {
    return t.mocha.it(space + space + 'And ' + what, how)
  }

  global.Before = (what, how) => {
    if (typeof what === 'string') {
      return t.mocha.before('Before ' + what, how)
    } else {
      how = what
      return t.mocha.before('Before', how)
    }
  }
  global.After = (what, how) => {
    if (typeof what === 'string') {
      return t.mocha.before('After ' + what, how)
    } else {
      how = what
      return t.mocha.before('After', how)
    }
  }

  global.BeforeEach = t.mocha.beforeEach
  global.AfterEach = t.mocha.beforeEach
}

tapGiven.tapGiven = tapGiven
tapGiven.default = tapGiven

module.exports = tapGiven
