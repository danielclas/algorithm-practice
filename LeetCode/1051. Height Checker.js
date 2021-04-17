/**
 * @param {number[]} heights
 * @return {number}
 */
 var heightChecker = function(heights) {
    
    let copy = [...heights];
    let count = 0;
    
    copy.sort((a,b) => a - b);
    
    for(let i = 0 ; i < copy.length ; i++)
        if(copy[i] != heights[i]) count++;
    
    return count;
};