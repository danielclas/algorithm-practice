/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    
    const chars = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let a = 0, b = 0;
    
    for(let i = 0 ; i < s.length / 2 ; i++){
        if(chars.includes(s[i])) a++;
        if(chars.includes(s[i + s.length / 2])) b++;
    }
    
    return a == b;    
};