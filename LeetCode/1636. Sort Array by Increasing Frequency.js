/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var frequencySort = function(nums) {
    
    let count = {};
    let freqs = {};
    let arr = [];
    
    for(let num of nums){
        if(!count[num]) count[num] = 0;
        count[num]++;
    }
    
    for(let key in count){
        let num = count[key];
        if(!freqs[num]) freqs[num] = [];
        freqs[num].push(...Array(num).fill(key));
    }
    
    let keys = Array.from(Object.keys(freqs));
    keys.sort((a,b) => a - b);
    
    for(let key of keys){
        let vals = freqs[key];
        if(vals.length > 1) vals.sort((a,b) => b - a);
        arr.push(...vals)
    }    
    
    return arr;
};