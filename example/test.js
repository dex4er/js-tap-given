/* global scenario, given, when, then */
require('tap-given')
require('chai').should()

scenario('Given-When-Then scenario', function () {
  given('some property in current context', () => {
    this.property = 42
  })

  when('I do something with the property in current context', () => {
    this.property /= 2
  })

  then('the property in current context has correct value', done => {
    this.property.should.equal(21)
    done()
  })
})
