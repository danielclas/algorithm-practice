/**
 * @param {string} number
 * @return {string}
 */
 var reformatNumber = function(number) {
    
    let digits = number.split('').filter(c => !['-', ' '].includes(c));
    let newNumber = [];
    
    while(digits.length > 4){
        let n = `${digits.shift()}${digits.shift()}${digits.shift()}`;
        newNumber.push(n);
    }
    
    if(digits.length <= 4){
        if(digits.length == 4){
            newNumber.push(`${digits.shift()}${digits.shift()}`);
            newNumber.push(`${digits.shift()}${digits.shift()}`);
        }else{
            newNumber.push(digits.join(''));
        }
    }
    
    return newNumber.join('-');
};