function binarySearch(array, target) {
    // Write your code here.
      let left = 0, right = array.length - 1;
      let middle = Math.floor((right + left ) / 2);
      
      while(right >= left){
          if(array[middle] > target){
              right = middle - 1;
          }else if(array[middle] < target){
              left = middle + 1;
          }else if(array[middle] == target){
              return middle;
          }
          
          middle = Math.floor((right + left ) / 2);
      }
      
      return -1;
  }
  
  // Do not edit the line below.
  exports.binarySearch = binarySearch;
  