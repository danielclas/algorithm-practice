/**
 * @param {string[]} words
 * @return {string}
 */
 var firstPalindrome = function(words) {
    return words.find((word) => isPalindromic(word)) || '';
};

function isPalindromic(word){
    for(let i = 0, j = word.length - 1 ; i < word.length / 2 ; i++, j--){
        if(word[i] !== word[j]) return false;
    }
        
    return true;
}