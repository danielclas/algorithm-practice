/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
 var buildArray = function(target, n) {
    let current = 1;
    let arr = [];
    
    for(let i = 0 ; i < target.length ; i++){
        if(target[i] == current) arr.push('Push');        
        else{
            while(current != target[i]){
                arr.push(...['Push', 'Pop']);
                current++;
            }
            arr.push('Push');
        }
        current++;
    }      
    
    return arr;
};