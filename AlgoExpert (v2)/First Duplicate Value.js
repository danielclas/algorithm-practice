function firstDuplicateValue(array) {
    const nums = {};
      
      for(let num of array){
          if(!nums[num]) nums[num] = 0;
          nums[num]++;
          if(nums[num] === 2) return num;
      }
      
    return -1;
  }
  
  // Do not edit the line below.
  exports.firstDuplicateValue = firstDuplicateValue;
  