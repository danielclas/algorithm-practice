/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    
    let richest = 0;
    
    for(let row = 0 ; row < accounts.length ; row++){
        let sum = 0;
        for(let col = 0 ; col < accounts[row].length ; col++){
            sum += accounts[row][col];
        }
        
        if(sum > richest) richest = sum;
    }
    
    return richest;
};