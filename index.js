'use strict'

function noop () {}

module.exports = function Switch (cases) {
  cases = cases || {}
  return function switchFn (value) {
    return (cases[value] || cases.default || noop)(value)
  }
}
