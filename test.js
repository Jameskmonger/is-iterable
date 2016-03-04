var isiterable = require('./index.js');

(function() {
    console.log ("should return false for undefined");

    if (isiterable(undefined)) {
        throw new Error("should return false for undefined");
    }
})();

(function() {
    console.log ("should return false for null");

    if (isiterable(null)) {
        throw new Error("should return false for null");
    }
})();

(function() {
    console.log ("should return true for string");

    if (!isiterable("test string")) {
        throw new Error("should return true for string");
    }
})();

(function() {
    console.log ("should return true for number array");

    if (!isiterable([ 1, 2, 3, 4 ])) {
        throw new Error("should return true for number array");
    }
})();
