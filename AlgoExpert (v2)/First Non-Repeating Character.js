function firstNonRepeatingCharacter(string) {
    const chars = {};
      
      for(let char of string){
          if(!chars[char]) chars[char] = 0;
          chars[char]++;
      }
      
      for(let i = 0 ; i < string.length ; i++){
          if(chars[string[i]] === 1) return i;
      }
      
    return -1;
  }
  
  // Do not edit the line below.
  exports.firstNonRepeatingCharacter = firstNonRepeatingCharacter;
  