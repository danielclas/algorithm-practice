function twoNumberSum(array, targetSum) {
    const sums = {};
      
      for(let num of array){
          if(sums[num]) return [num, sums[num]];
          const diff = targetSum - num;
          sums[diff] = num;
      }
      
      return [];
  }
  
  // Do not edit the line below.
  exports.twoNumberSum = twoNumberSum;
  