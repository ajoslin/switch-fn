'use strict'

var test = require('tape')
var Switch = require('./')

test(function (t) {
  var cases = {
    a: function () { return 'result a' },
    default: function () { return 'result default' }
  }

  var fn = Switch(cases)

  t.equal(fn('a'), 'result a')
  t.equal(fn('b'), 'result default')

  t.end()
})

test('doesnt error if no default found', function (t) {
  var fn = Switch()
  fn(1)
  t.end()
})

test('custom "pattern" matcher', function (t) {
  var cases = {
    foo: function () { return 'bar' },
    baz: function (val) { return val.buz }
  }
  var fn = Switch(cases, function (value) { return value.caseChoice })
  var obj = {
    caseChoice: 'baz',
    buz: 'my val'
  }
  t.equal(fn(obj), 'my val')
  t.end()
})
