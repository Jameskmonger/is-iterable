(function(mod) {
    mod.exports = function (obj) {
        return (obj != null && typeof Symbol !== 'undefined' && Symbol && typeof obj[Symbol.iterator] === 'function');
    };
})(module);
