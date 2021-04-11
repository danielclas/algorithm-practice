/**
 * @param {number[]} nums
 * @return {number}
 */
 var findLengthOfLCIS = function(nums) {
    
    let len = 0;
    let max = Number.MIN_VALUE;
    let prev = Number.MIN_VALUE;
    
    for(let num of nums){
        len = num > prev ? len + 1 : 1;
        max = len > max ? len : max;
        prev = num;
    }       
    
    return max;
};