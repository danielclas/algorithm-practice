/**
 * @param {number[]} arr
 * @return {number}
 */
 var sumOddLengthSubarrays = function(arr) {
    
    //let sum = arr.reduce((a, b) => a + b, 0);
    let acum = 0;
    
    for(let i = 0 ; i < arr.length ; i++){
        let len = 1;
        while(i + len <= arr.length){
            acum += sum(arr, i, len);
            len += 2;
        }
    }
    
    
    return acum;
};

function sum(arr, i, len){
    
    let sum = 0;
    
    while(len > 0 && i < arr.length){
        sum += arr[i];
        len--;
        i++;
    }
    
    return sum;
}