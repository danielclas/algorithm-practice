/**
 * @param {string} s
 * @return {string}
 */
 var replaceDigits = function(s) {
    let chars = [...s];
    
    for(let i = 1 ; i < chars.length ; i += 2){
        chars[i] = shift(chars[i - 1], parseInt(chars[i]));
    }
    
    return chars.join('');
};

function shift(prev, n){
    let code = `${prev}`.charCodeAt(0);
    return String.fromCharCode(code + n);
}