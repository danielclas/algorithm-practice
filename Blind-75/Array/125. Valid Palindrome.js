/**
 * A phrase is a palindrome if, after converting all uppercase letters 
 * into lowercase letters and removing all non-alphanumeric characters, 
 * it reads the same forward and backward. Alphanumeric characters include 
 * letters and numbers. 
 * Given a string s, return true if it is a palindrome, or false otherwise.
 */

 var isPalindrome = function(s) {    
    
    const word = [...s].filter((char) => isAlphanumeric(char));
    
    for(let i = 0, j = word.length - 1 ; i < word.length / 2 ; i++, j--){
        if(word[i].toLowerCase() != word[j].toLowerCase()) return false;
    }
    
    return true;    
};

function isAlphanumeric(char){
    return (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || (char >= '0' && char <= '9');
}