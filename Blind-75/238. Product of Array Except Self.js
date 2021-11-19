/**
 * Given an integer array nums, return an array answer such that answer[i] 
 * is equal to the product of all the elements of nums except nums[i].
 * The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 * You must write an algorithm that runs in O(n) time and without using the division operation.
 */

 var productExceptSelf = function(nums) {
    const left = Array(nums.length).fill(1); 
    const right = Array(nums.length).fill(1);
    const result = [];
    
    let prodLeft = 1, prodRight = 1; 
    
    for(let i = 0, j = nums.length - 1 ; i < nums.length ; i++, j--){
        left[i] = prodLeft;
        right[j] = prodRight;
        
        prodLeft *= nums[i];
        prodRight *= nums[j];
    }
    
    for(let num of nums){
        result.push(left.shift() * right.shift());
    }
    
    return result;
};