/**
 * @param {string} s
 * @return {boolean}
 */
 var checkString = function(s) {
    let a = s.lastIndexOf('a'), b = s.indexOf('b');
    
    return a === -1 || b === - 1 ? true : a < b;
};