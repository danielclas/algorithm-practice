/**
 * @param {string} s
 * @return {boolean}
 */
 var areOccurrencesEqual = function(s) {
    const map = {};
    
    for(let c of s){
        if(!map[c]) map[c] = 0;
        map[c]++;
    }
    
    let num;
    
    for(let key in map){
        if(!num) num = map[key];
        if(num != map[key]) return false;
    }
    
    return true;
};