'use strict'

module.exports = function (t) {
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
    return t.mocha.it('When ' + what, how)
  }
  global.Then = (what, how) => {
    return t.mocha.it('Then ' + what, how)
  }
  global.And = (what, how) => {
    return t.mocha.it('And ' + what, how)
  }

  global.Before = (what, how) => {
    return t.mocha.before('Before ' + what, how)
  }
  global.After = (what, how) => {
    return t.mocha.after('After ' + what, how)
  }

  global.BeforeEach = t.mocha.beforeEach
  global.AfterEach = t.mocha.beforeEach
}
