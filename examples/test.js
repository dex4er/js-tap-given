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
