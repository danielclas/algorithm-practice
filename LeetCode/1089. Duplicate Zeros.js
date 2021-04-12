/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
 var duplicateZeros = function(arr) {
    
    let arr2 = [];
    
    for(let num of arr){
        let val = num == 0 ? [0,0] : [num];
        arr2.push(...val);
        if(arr2.length == arr.length) break;
    }
    
    for(let i = 0 ; i < arr.length ; i++) arr[i] = arr2[i];   
   
};
