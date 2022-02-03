/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var rearrangeArray = function(nums) {
    const output = [];
    
    let p = 0, n = 0;
    
    while(output.length !== nums.length){        
        p = findNextP(nums, p);
        n = findNextN(nums, n);
        
        if(p !== -1)
            output.push(nums[p]);        
        
        if(n !== -1)
            output.push(nums[n]);
        
        p++;
        n++;        
    }
    
    return output;
};

function findNextP(nums, p, indice){
    for(let i = p ; i < nums.length ; i++){
        if(i < nums.length && nums[i] >= 0)
            return i;
    }
    
    return -1;
}

function findNextN(nums, n){
    for(let i = n ; i < nums.length ; i++){
        if(i < nums.length && nums[i] < 0)
            return i;
    }
    
    return -1;
}