# isiterable

Easily detect if an object is [iterable](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Iteration_protocols).

## Usage

```javascript
var isiterable = require('isiterable');

var iterable = isiterable([ 1, 2, 3, 4]); // true

var notIterable = isiterable(5); // false
```

## License

[MIT License](/LICENSE)
