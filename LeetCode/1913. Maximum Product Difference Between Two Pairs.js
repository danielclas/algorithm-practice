/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxProductDifference = function(nums) {
    nums.sort((a,b) => a - b);
    return productDifference(nums.shift(), nums.shift(), nums.pop(), nums.pop());
};

function productDifference(a,b,c,d){
    return Math.abs((a * b) - (c * d));
}