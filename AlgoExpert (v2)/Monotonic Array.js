function isMonotonic(array) {
    if(!array || array.length <= 2) return true;
      
      let direction = 0;
      
      for(let i = 0 ; i < array.length - 1 ; i++){		
          if(array[i] !== array[i + 1]){
              if(direction === 0){
                  direction = array[i] < array[i + 1] ? -1 : 1;
              }else{
                  const temp = array[i] < array[i + 1] ? -1 : 1;
                  if(temp !== direction) return false;
              }
          }
      }
      
      return true;
  }
  
  // Do not edit the line below.
  exports.isMonotonic = isMonotonic;
  