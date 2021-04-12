/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
 var countBalls = function(lowLimit, highLimit) {
    
    let count = {};
    let max = Number.MIN_VALUE;
    
    for(let i = lowLimit ; i <= highLimit ; i++){
        let sum = getSum(i);
        if(!count[sum]) count[sum] = 0;
        count[sum]++;
    }
    
    for(let key in count){
        if(count[key] > max) max = count[key];
    }
    
    return max;
};

function getSum(num){
    
    let sum = 0;
    
    for(let c of num.toString()) sum += parseInt(c);
    
    return sum;
}