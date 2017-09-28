import * as chai from 'chai'
import * as tap from 'tap'
import tapGiven = require('../lib/tap-given')

tapGiven(tap)
chai.should()

Feature('TDD in Given-When-Then style for TAP', () => {
  Scenario('Basic scenario', () => {
    let a: number
    let b: number
    let c: number

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
