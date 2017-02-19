'use strict'

/* global Feature, Scenario, Given, When, Then */
const t = require('tap')
require('../lib/tap-given')(t)
require('chai').should()

Feature('Test tap-given module', () => {
  Scenario('Given-When-Then basic scenario', function () {
    Given('some property in current context', () => {
      this.property = 42
    })

    When('I do something with property in current context', () => {
      this.property /= 2
    })

    Then('property in current context has correct value', () => {
      this.property.should.equal(21)
    })
  })

  /* global Before, BeforeEach, After, AfterEach */
  Scenario('Given-When-Then scenario with callbacks', function () {
    BeforeEach(done => {
      done()
    })

    AfterEach(done => {
      done()
    })

    Before('do something', done => {
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
