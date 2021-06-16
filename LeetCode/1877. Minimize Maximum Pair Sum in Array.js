/**
 * @param {number[]} nums
 * @return {number}
 */
 var minPairSum = function(nums) {
    
    const sums = [];
    
    nums.sort((a,b) => a - b);
     
    while(nums.length > 0) sums.push(nums.shift() + nums.pop());    
    
    let max = -Infinity;
    
    for(let sum of sums) if(sum > max) max = sum;
    
    return max;
};