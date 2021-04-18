/**
 * @param {number[]} nums
 * @return {number}
 */
 var minOperations = function(nums) {
    
    let count = 0;
    
    if(nums.length == 1) return 0;
    
    let sum = nums.reduce((a,b) => a + b, 0);
    
    for(let i = 0 ; i < nums.length - 1 ; i++){
        if(nums[i + 1] <= nums[i]){
            nums[i + 1] = nums[i] + 1;
        }
    }
    
    return nums.reduce((a,b) => a + b, 0) - sum;
};