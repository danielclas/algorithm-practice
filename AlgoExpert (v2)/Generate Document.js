function generateDocument(characters, document) {
    if(document === '') return true;
      
      const chars = {};
      
      for(let char of characters){
          if(!chars[char]) chars[char] = 0;
          chars[char]++;
      }
      
      for(let char of document){
          if(!chars[char] || chars[char] === 0)
              return false;
          chars[char]--;
      }	
      
    return true;
  }
  
  // Do not edit the line below.
  exports.generateDocument = generateDocument;
  