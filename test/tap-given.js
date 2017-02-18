'use strict'

/* global scenario, given, when, then */
require('../lib/tap-given')
require('chai').should()

scenario('given-when-then basic scenario', function () {
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

scenario('given-when-then scenario with callbacks', function () {
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
