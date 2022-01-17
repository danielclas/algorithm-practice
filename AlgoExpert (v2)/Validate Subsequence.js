function isValidSubsequence(array, sequence) {
    let seqIndex = 0;
      
      for(let i = 0 ; i < array.length ; i++){
          if(sequence[seqIndex] === array[i])
              seqIndex++;
          
          if(seqIndex === sequence.length) return true;
      }
      
      return seqIndex === sequence.length;
  }
  
  // Do not edit the line below.
  exports.isValidSubsequence = isValidSubsequence;
  