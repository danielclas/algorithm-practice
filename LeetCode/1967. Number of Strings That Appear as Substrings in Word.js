/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
 var numOfStrings = function(patterns, word) {
    let count = 0;
    
    for(let p of patterns){
        if(isSubstring(p, word))
            count++;
    }
    
    return count;
};

function isSubstring(pattern, word){
    if(pattern === word) return true;
    if(pattern.length > word.length) return false;
    
    return word.includes(pattern);
}