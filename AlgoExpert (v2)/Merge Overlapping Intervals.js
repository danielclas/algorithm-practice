function mergeOverlappingIntervals(array) {
    array = array.sort((a,b) => a[0] - b[0]);
      
      const stack = [];
      
      for(let interval of array){
          if(stack.length === 0) stack.push(interval);
          else{
              const last = stack[stack.length - 1];
              if(last[1] >= interval[0] && last[1] < interval[1]){
                  stack[stack.length - 1][1] = interval[1];
              }else if(last[1] < interval[0]) stack.push(interval);
          }
      }
      
      return stack;
  }
  
  // Do not edit the line below.
  exports.mergeOverlappingIntervals = mergeOverlappingIntervals;
  