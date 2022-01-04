/**
 * Given an integer array nums, find the contiguous subarray 
 * (containing at least one number) which has the largest sum and return its sum.
 * A subarray is a contiguous part of an array.
 */


 var maxSubArray = function(nums) {
    let max = nums[0];
    let current = nums[0];
    
    for(let i = 1 ; i < nums.length ; i++){
        let num = nums[i];
        current = Math.max(current + num, num);
        max = Math.max(max, current);
    }
    
    return max;
};