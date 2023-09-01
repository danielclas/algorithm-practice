/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    
    // Which letter in s maps to t
    let sMap = {};
    let tMap = {};

    for(let i = 0 ; i < s.length ; i ++){
        const tLetter = t[i];
        const sLetter = s[i];

        if(sMap[sLetter] && sMap[sLetter] !== tLetter){
            return false;
        }else sMap[sLetter] = tLetter;

        if(tMap[tLetter] && tMap[tLetter] !== sLetter){
            return false;
        }else tMap[tLetter] = sLetter;
    }

    return true;
};