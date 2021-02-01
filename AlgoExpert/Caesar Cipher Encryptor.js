function caesarCipherEncryptor(string, key) {
    // Write your code here.
      let a = [];
      
      for(let char of string){
          a.push(shift(char, key));
      }	
      
      return a.join('');
  }
  
  function shift(char, key){
      
    let charCode = char.charCodeAt(0);
    let zCharCode = 'z'.charCodeAt(0);
    
    if(charCode + key > zCharCode){
        while(key > 0){
          charCode++;
        if(charCode > zCharCode){
            charCode = 'a'.charCodeAt(0);
        }
        key--;
      }
    }
    
    return String.fromCharCode(charCode + key);
  }
  // Do not edit the line below.
  exports.caesarCipherEncryptor = caesarCipherEncryptor;
  