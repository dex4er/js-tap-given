'use strict'

module.exports = function (t) {
  global.scenario = t.mocha.context
  global.given = (what, how) => { return t.mocha.it('Given ' + what, how) }
  global.when = (what, how) => { return t.mocha.it('When ' + what, how) }
  global.then = (what, how) => { return t.mocha.it('Then ' + what, how) }

  global.before = t.mocha.before
  global.after = t.mocha.after

  global.beforeEach = t.mocha.beforeEach
  global.afterEach = t.mocha.afterEach
}
