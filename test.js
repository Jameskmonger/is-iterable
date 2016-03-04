var isiterable = require('./index.js');

(function() {
    console.log ("Testing returns false for undefined");

    if (isiterable(undefined)) {
        throw new Error("should return false for undefined");
    }
})();

(function() {
    console.log ("Testing returns false for null");

    if (isiterable(null)) {
        throw new Error("should return false for null");
    }
})();
