function minimumCharactersForWords(words) {
    const chars = {};
      
      for(let word of words){
          const temp = charsFromWord(word);
          for(let char in temp){
              const value = temp[char];
              if(!chars[char] || value > chars[char]) 
                  chars[char] = value;
          }
      }
      
      const output = [];
      
      for(let char in chars){
          const value = chars[char];
          output.push(...Array(value).fill(char));
      }
      
    return output;
  }
  
  function charsFromWord(word){
      const obj = {};
      
      for(let char of word){
          if(!obj[char])
              obj[char] = 0;
          obj[char]++;
      }
      
      return obj;
  }
  
  // Do not edit the line below.
  exports.minimumCharactersForWords = minimumCharactersForWords;
  