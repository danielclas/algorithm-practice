function findThreeLargestNumbers(array) {
    const output = [];
      
      for(let num of array) 
          compareAndUpdate(output, num);
      
      return output.sort((a,b) => a - b);
  }
  
  function compareAndUpdate(array, num){
      if(array.length < 3) array.push(num);
      else{
          if(num > array[0]) array[0] = num;
          else if(num > array[1]) array[1] = num;
          else if(num > array[2]) array[2] = num;
          array.sort((a,b) => a - b);
      }
      
  }
  // Do not edit the line below.
  exports.findThreeLargestNumbers = findThreeLargestNumbers;
  