/**
 * @param {number[]} gain
 * @return {number}
 */
 var largestAltitude = function(gain) {
    
    let alts = [0];
    let max = alts[0];
    
    for(let g of gain){
        alts.push(alts[alts.length - 1] + g);
        let last = alts[alts.length - 1];
        if(last > max) max = last;
    }
    
    return max;    
};