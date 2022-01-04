/**
 * @param {string[]} operations
 * @return {number}
 */
 var finalValueAfterOperations = function(operations) {
    let value = 0;
    
    for(let o of operations){
        if(o.includes('-')) value -= 1;
        else value += 1;
    }
    
    return value;
};