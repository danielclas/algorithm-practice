function runLengthEncoding(string) {
    let encoded = [];
    let count = 0;
    let previousChar = '';

    for(let char of string){
        if((char !== previousChar && count > 0) || count === 9){
            encoded.push(count);
            encoded.push(previousChar);
                
            count = 1;
        }else{
            count ++;
        }	
        
        previousChar = char;
    }
        
    encoded.push(count);
    encoded.push(previousChar);	

    return encoded.join('');
}