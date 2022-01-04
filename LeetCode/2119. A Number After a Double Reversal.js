/**
 * @param {number} num
 * @return {boolean}
 */
 var isSameAfterReversals = function(num) {
    return reverse(reverse(num)) === num;
};


function reverse(num) {
    return parseInt(num.toString().split('').reverse().join(''));
}