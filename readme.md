# switch-fn [![Build Status](https://travis-ci.org/ajoslin/switch-fn.svg?branch=master)](https://travis-ci.org/ajoslin/switch-fn)

> Write a functional switch statement.

## Install

```
$ npm install --save switch-fn
```

## Usage

```js
var Switch = require('switch-fn')

var fn = Switch({
  a: actionA,
  b: actionB,
  default: defaultAction
})

var result = fn('a') // => calls actionA with 'a' and gives back actionA's return value
```

## API

#### `Switch(cases)` -> `function`

##### cases

*Required*
Type: `object`

An object, with keys being the 'cases' to match against and values being the function to call in each case.

If no case matching the input is found and a 'default' case is given, it will be used.

# More Examples

#### As part of a data pipeline

```js
var pipe = require('value-pipe')
var Switch = require('switch-fn')

var onStatus = pipe(getStatus, Switch({
  active: actOnActive,
  inactive: actOnInactive,
  pending: actOnPending
}))

var result = onStatus(user)

function getStatus (user) {
  return user.status
}
```

#### Pass in an array for numbers only

```js
var Switch = require('switch-fn')

var fn = Switch([onZero, onOne])

fn(0)
```

#### Fibonacci

```es6
var fib = Switch({
  0: (n) => n,
  1: (n) => n,
  default: (n) => fib(n - 1) + fib(n - 2)
});

fib(10) // => 55
```

## License

MIT © [Andrew Joslin](http://ajoslin.com)
