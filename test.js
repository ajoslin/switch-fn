'use strict'

var test = require('tape')
var sinon = require('sinon')
var Switch = require('./')

test(function (t) {
  var cases = {
    a: sinon.spy(),
    default: sinon.spy()
  }
  var fn = Switch(cases)

  fn('a')
  t.ok(cases.a.calledOnce)
  t.notOk(cases.default.called)

  fn('b')
  t.ok(cases.a.calledOnce)
  t.ok(cases.default.calledOnce)
  t.end()
})

test('doesnt error if no default found', function (t) {
  var fn = Switch()
  fn(1)
  t.end()
})
