function tandemBicycle(red, blue, fastest) {
    red.sort((a,b) => a - b);
      blue.sort((a,b) => a - b);
      let minSum = 0;
      let maxSum = 0;
      
      for(let i = 0, j = red.length - 1 ; i < red.length ; i++, j--){
          minSum += red[i] > blue[i] ? red[i] : blue[i];
          maxSum += red[j] > blue[i] ? red[j] : blue[i];
      }
      
    return fastest ? maxSum : minSum;
  }
  
  // Do not edit the line below.
  exports.tandemBicycle = tandemBicycle;
  