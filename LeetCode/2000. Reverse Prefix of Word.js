/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
 var reversePrefix = function(word, ch) {
    const index = word.indexOf(ch);
    
    if(index === -1) return word;
    
    const s = [...word.substring(0, index + 1)].reverse();
    
    return s.join('') + word.substring(index + 1);  
    
};