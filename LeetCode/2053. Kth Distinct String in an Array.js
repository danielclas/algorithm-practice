/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
 var kthDistinct = function(arr, k) {
    const count = {};
    
    for(let s of arr){
        if(!count[s]) count[s] = 0;
        count[s]++;
    }
    
    for(let s of arr){
        if(count[s] === 1){
            k--;
            if(k === 0) return s;
        }
    }
    
    return '';
};