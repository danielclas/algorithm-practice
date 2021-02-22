/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    
    let arr =  nums.filter(n => nums.filter(k => k == n).length == 1);
    
    return arr.reduce((a, b) => a + b, 0);
};