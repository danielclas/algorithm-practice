function bubbleSort(array) {
    for(let i = 0 ; i < array.length - 1 ; i++){
          for(let j = i + 1 ; j < array.length ; j++){
              if(array[j] < array[i]){
                  const temp = array[j];
                  array[j] = array[i];
                  array[i] = temp;
              }
          }
      }
      
      return array;
  }
  
  // Do not edit the line below.
  exports.bubbleSort = bubbleSort;
  