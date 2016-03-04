(function(mod) {
    mod.exports = function (obj) {
        return (obj !== undefined && obj !== null && typeof obj[Symbol.iterator] === 'function');
    };
})(module);
