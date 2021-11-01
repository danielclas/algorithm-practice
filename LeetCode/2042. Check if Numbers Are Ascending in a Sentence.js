/**
 * @param {string} s
 * @return {boolean}
 */
 var areNumbersAscending = function(s) {
    const nums = [];
    
    for(let c of s.split(' ')){
        const num = parseInt(c);
        if(num) nums.push(num);
    }
    
    for(let i = 0 ; i < nums.length -1 ; i++){
        if(nums[i] >= nums[i + 1]) return false;
    }
    
    return true;
};