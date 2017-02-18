'use strict'

/* global scenario, given, when, then */
require('../lib/tap-given')
require('chai').should()

scenario('Given-When-Then basic scenario', function () {
  given('some property in current context', () => {
    this.property = 42
  })

  when('I do something with property in current context', () => {
    this.property /= 2
  })

  then('property in current context has correct value', () => {
    this.property.should.equal(21)
  })
})

/* global before, beforeEach, after, afterEach */
scenario('Given-When-Then scenario with callbacks', function () {
  beforeEach(done => {
    done()
  })

  afterEach(done => {
    done()
  })

  before(done => {
    done()
  })

  after(done => {
    done()
  })

  given('some property in current context with callback called when is done', done => {
    this.property = 42
    done()
  })

  when('I do something with property in current context with callback called when is done', done => {
    this.property /= 2
    done()
  })

  then('property in current context has correct value with callback called when is done', done => {
    this.property.should.equal(21)
    done()
  })
})
