var isiterable = require('./index.js');

isiterable([1, 2, 3]); // returns true

isiterable('hello i am a string'); // returns true

isiterable(3); // returns false

isiterable(false); // returns false
