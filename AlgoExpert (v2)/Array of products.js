function arrayOfProducts(array) {
    const output = [];
      let left = [], right = [];
      
      let leftProd = 1, rightProd = 1;
      
      for(let i = 0 ; i < array.length ; i++){
          left.push(leftProd);
          leftProd *= array[i];
      }
      
      for(let i = array.length - 1 ; i >= 0 ; i--){
          right.unshift(rightProd);
          rightProd *= array[i];
      }
      
      for(let i = 0 ; i < left.length ; i++){
          output.push(left[i] * right[i]);
      }
      
      return output;
  }
  
  // Do not edit the line below.
  exports.arrayOfProducts = arrayOfProducts;
  