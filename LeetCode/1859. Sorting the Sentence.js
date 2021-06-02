/**
 * @param {string} s
 * @return {string}
 */
 var sortSentence = function(s) {
    let shuffled = s.split(' ');
    let original = Array(shuffled.length).fill('');
    
    for(let sh of shuffled){
        let i = sh[sh.length - 1];
        original[i] = sh.substring(0, sh.length - 1);
    }
    
    return original.join(' ').trim();
};