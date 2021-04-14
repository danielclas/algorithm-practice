/**
 * @param {string} s
 * @return {number}
 */
 var maxDepth = function(s) {
    
    let max = 0;
    let depth = 0;
        
    for(let c of s){        
        if(c != '('){
            max = depth > max ? depth : max;
            if(c == ')') depth--;
        }else depth++;        
    }    
    
    return max >= 1 ? max : 0;
};