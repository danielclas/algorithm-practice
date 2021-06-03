/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
 var isSumEqual = function(firstWord, secondWord, targetWord) {
    return getValue(firstWord) + getValue(secondWord) == getValue(targetWord);
};

function getValue(s){
    let arr = [];
    
    for(let c of s){
        arr.push(`${c}`.charCodeAt(0) - 97);
    }
    
    return parseInt(arr.join(''));
}