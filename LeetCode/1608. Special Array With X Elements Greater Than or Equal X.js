/**
 * @param {number[]} nums
 * @return {number}
 */
 var specialArray = function(nums) {
    
    let len = nums.length;
    let arr = Array(len).fill(0);
    let sum = 0;
    
    for(let num of nums){
        if(num > arr.length) arr[arr.length - 1]++;
        else if(num != 0) arr[num - 1]++;
    }
    
    for(let i = arr.length - 1 ; i >= 0 ; i--){
        sum += arr[i];
        if(sum == i + 1) return i + 1;
    }
    
    
    return -1;
};