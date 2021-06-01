/**
 * @param {string} s
 * @return {string}
 */
 var makeGood = function(s) {
    let chars = transform([...s]); 
    return chars.join(''); 
};

function transform(chars){
    let wasTransformed = false;
    
    for(let i = 0 ; i < chars.length - 1 ; i++){
        if(compareIgnoreCase(chars[i], chars[i + 1])){
            chars[i] = '';
            chars[i + 1] = '';
            wasTransformed = true;
        }
    }
    
    chars = chars.filter(c => c != '');
    
    return wasTransformed ? transform(chars) : chars;
}

function compareIgnoreCase(a,b){
    if([a,b].includes('')) return false;
    return Math.abs(a.charCodeAt(0) - b.charCodeAt(0)) == 32;
}