/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    
    let val;
     
     nums = nums.filter((v, i, a) => a.indexOf(v) === i);
     nums.sort((a,b) => a - b);
 
     if(nums.length < 3){
         val = nums[nums.length - 1];
     }else{
         val = nums[nums.length - 3];
     }
     
     return val;
 };
 