'use strict'

/* global Feature, Scenario, Given, When, Then, And, Before, BeforeEach, After, AfterEach */
const t = require('tap')
require('../lib/tap-given')(t)
require('chai').should()

Feature('Test tap-given module', () => {
  Scenario('Given-When-Then basic scenario', () => {
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

  Scenario('Given-When-Then scenario with callbacks and before/after hooks', () => {
    Before('do something', done => {
      done()
    })

    BeforeEach(done => {
      done()
    })

    AfterEach(done => {
      done()
    })

    After('do something', done => {
      done()
    })

    Given('some property in current context with callback called when is done', done => {
      this.property = 42
      done()
    })

    When('I do something with property in current context with callback called when is done', done => {
      this.property /= 2
      done()
    })

    Then('property in current context has correct value with callback called when is done', done => {
      this.property.should.equal(21)
      done()
    })
  })
})
