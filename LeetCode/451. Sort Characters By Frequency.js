/**
 * @param {string} s
 * @return {string}
 */
 var frequencySort = function(s) {
    
    let chars = {};
    let counts = {};
    let arr = [];
    
    for(let c of s){
        if(!chars[c]) chars[c] = 0;
        chars[c]++;
    }
    
    for(let c in chars){
        let count = chars[c];
        if(!counts[count]) counts[count] = [];
        counts[count].push(...Array(count).fill(c));
    }
    
    let keys = Array.from(Object.keys(counts));
    keys.sort((a,b) => b - a);
    
    for(let key of keys){
        let vals = counts[key];
        arr.push(...vals);
    }
    
    return arr.join('');
    
};