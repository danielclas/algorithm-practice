function spiralTraverse(matrix) {
    const output = [];
      
      while(matrix.length > 0){
          traverseRight(matrix, output);
          traverseDown(matrix, output);
          traverseLeft(matrix, output);
          traverseUp(matrix, output);
      }
      
      return output;
  }
  
  function traverseRight(matrix, output){
      const array = matrix?.shift();
      if(array)	output.push(...array);
  }
  
  function traverseDown(matrix, output){
      for(let array of matrix){
          const el = array.pop();
          if(el) output.push(el);
      }
  }
  
  function traverseLeft(matrix, output) {
      const array = matrix?.pop();
      if(array) {
          for(let i = array.length - 1 ; i >= 0 ; i--)
              output.push(array[i]);
      }
  }
  
  function traverseUp(matrix, output) {
      for(let i = matrix.length - 1 ; i >= 0 ; i--){
          const el = matrix[i]?.shift();
          if(el) output.push(el);
      }
  }
  
  // Do not edit the line below.
  exports.spiralTraverse = spiralTraverse;
  