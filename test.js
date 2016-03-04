var isiterable = require('./index.js');

(function() {
    console.log ("Testing returns false for undefined");

    if (isiterable(undefined)) {
        throw new Error("should return false for undefined");
    }
})();
