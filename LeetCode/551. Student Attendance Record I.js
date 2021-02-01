/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    
    let absence = false;
    let previous = 0;
    
    for(let char of s){
        if(char == 'A'){
            if(absence) return false;
            else absence = true;
                        
            previous = 0;
        }else if(char == 'L'){
            if(previous == 2) return false;
            else previous++;
        }else{
            previous = 0;
        }
    }    
    
    return true;
};