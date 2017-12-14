var isiterable = require('./index.js');

(function() {
    console.log("should return false for undefined");

    if (isiterable(undefined)) {
        throw new Error("should return false for undefined");
    }
})();

(function() {
    console.log("should return false for null");

    if (isiterable(null)) {
        throw new Error("should return false for null");
    }
})();

(function() {
    console.log("should return true for string");

    if (!isiterable("test string")) {
        throw new Error("should return true for string");
    }
})();

(function() {
    console.log("should return true for number array");

    if (!isiterable([ 1, 2, 3, 4 ])) {
        throw new Error("should return true for number array");
    }
})();

(function() {
    console.log("should return true for array of null");

    if (!isiterable([ null, null, null, null ])) {
        throw new Error("should return true for array of null");
    }
})();

(function() {
    console.log("should return true for array of object");

    if (!isiterable([ {}, {}, {}, {} ])) {
        throw new Error("should return true for array of object");
    }
})();

(function() {
    console.log("should return false for boolean");

    if (isiterable(true)) {
        throw new Error("should return false for boolean");
    }
})();

(function() {
    console.log("should return false for object");

    if (isiterable({ value: 5 })) {
        throw new Error("should return false for object");
    }
})();

(function() {
    var oldSymbol = global.Symbol;

    try {
        delete global.Symbol;

        console.log("should return false if Symbol is not defined");

        if (isiterable([ 1, 2, 3, 4 ])) {
            throw new Error("should return false if Symbol is not defined");
        }
    } catch (error) {
        if (error instanceof ReferenceError) {
            throw new Error("should not raise an exception if Symbol is not defined");
        } else {
            throw error;
        }
    } finally {
        global.Symbol = oldSymbol;
    }
})();
