/**
 * @param {string[]} strs
 * @return {number}
 */
 var minDeletionSize = function(strs) {
    
    let matrix = [];
    let count = 0;
    
    for(let s of strs) matrix.push(s.split(''));
    
    for(let col = 0 ; col < matrix[0].length ; col++){
        let prev;
        for(let row = 0 ; row < matrix.length ; row++){
            if(prev && prev > matrix[row][col]){
                count++;
                break;
            }
            prev = matrix[row][col];
        }
    }
    
    return count;
};