/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
 var truncateSentence = function(s, k) {
    
    let arr = s.split(' ');
    let r = "";
    let count = 0;
    
    for(let a of arr){
        r += a;
        count++;
        if(count == k) break;
        else r += " ";
    }
    
    return r;
};