'use strict'

const t = require('tap')

global.scenario = t.mocha.context
global.given = (what, how) => { return t.mocha.it('Given ' + what, how) }
global.when = (what, how) => { return t.mocha.it('When ' + what, how) }
global.then = (what, how) => { return t.mocha.it('Then ' + what, how) }

module.exports = t
