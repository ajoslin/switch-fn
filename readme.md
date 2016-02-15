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

If no matching is found, and a 'default' case is given, it will be used.

## More Examples

Getting crazy with value-pipe:

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

You can also take advantage of ES2015 modules which provide a default prop
`actions.js`
```es6
export function a() {}
export function b() {}
export default function defaultAction() {}
```
```es6
import * as switch from 'switch-fn';
import * as actions from './actions';

var fn = switch(actions)

var result = fn('a') // => calls a with 'a' and gives back a's return value
```

You can pass in an array if you're only expecting numbers:

```js
var Switch = require('switch-fn')

var fn = Switch([onZero, onOne])

fn(0)
```

## License

MIT © [Andrew Joslin](http://ajoslin.com)
