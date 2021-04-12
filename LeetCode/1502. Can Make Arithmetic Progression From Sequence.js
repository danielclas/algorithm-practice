/**
 * @param {number[]} arr
 * @return {boolean}
 */
 var canMakeArithmeticProgression = function(arr) {       
    
    arr.sort((a,b) => a - b);
        
    let diff = Math.abs(arr[0] - arr[1]);
    
    for(let i = 1 ; i < arr.length - 1 ; i++){
        if(Math.abs(arr[i] - arr[i + 1]) != diff) return false; 
    }
    
    return true;    
};