function moveElementToEnd(array, toMove) {
    let index = lastNonToMove(array, array.length - 1, toMove);
      
      if(index <= 0) return array;
      
      for(let i = 0 ; i < array.length ; i++){
          if(array[i] === toMove && i < index){
              const temp = array[index];
              array[index] = array[i];
              array[i] = temp;
              index = lastNonToMove(array, index, toMove);
          }
      }
      
      return array;
  }
  
  function lastNonToMove(array, i, toMove) {
      
      while(i > 0){
          if(array[i] !== toMove) 
              return i;
          i--;
      }
      
      return -1;
  }
  // Do not edit the line below.
  exports.moveElementToEnd = moveElementToEnd;
  