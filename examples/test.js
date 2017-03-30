const t = require('tap')
require('../lib/tap-given')(t)
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
