/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
 var canBeTypedWords = function(text, brokenLetters) {
    const words = text.split(' ');
    const chars = {};
    let count = 0;
    
    for(let char of brokenLetters){
        if(!chars[char]) chars[char] = true;
    }
    
    for(let word of words){
        const exists = [...word].some(c => chars[c]);
        if(!exists) count++;
    }
    
    return count;    
};