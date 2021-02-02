/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    
    let count = 0;
    
    for(let word of words){
        let temp = 0;
        for(let char of word){
            if(allowed.includes(char)){
                temp++;
            }
        }
        
        if(temp == word.length) count++;
    }
    
    return count;
};