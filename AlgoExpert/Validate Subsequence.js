function isValidSubsequence(array, sequence) {
    // Write your code here.
      let sequencePointer = 0;
      let arrayPointer = 0;
      
      while(sequencePointer < sequence.length){
          
          if(arrayPointer >= array.length || sequencePointer >= sequence.length)
              break;		
          
          if(array[arrayPointer] == sequence[sequencePointer])
              sequencePointer++;
          
          arrayPointer++;		
      }
      
      return sequencePointer == sequence.length;
  }
  