'use strict'

function noop () {}

function identity (value) { return value }

module.exports = function Switch (cases, customizer) {
  customizer = customizer || identity
  cases = cases || {}
  return function switchFn (value) {
    var index = customizer(value)
    return (cases[index] || cases.default || noop)(value)
  }
}
