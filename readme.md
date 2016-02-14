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

fn('a') // => calls actionA with 'a'
```

## API

#### `Switch(cases)` -> `function`

##### cases

*Required*
Type: `object`

An object, with keys being the 'cases' to match against and values being the function to call in each case.

If no matching is found, and a 'default' case is given, it will be used.

## More Examples

Getting crazy with value-pipe:

```js
var pipe = require('value-pipe')
var Switch = require('switch')

var onStatus = pipe(getStatus, Switch({
  active: actOnActive,
  inactive: actOnInactive,
  pending: actOnPending
}))

onStatus(user)

function getStatus (user) {
  return user.status
}
```

## License

MIT © [Andrew Joslin](http://ajoslin.com)
