/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var check = function(nums) {
        
    if(isSorted(nums)) return true;
    
    let ind = 0;
    
    for(let i = 0 ; i < nums.length - 1 ; i++){
        if(nums[i] > nums[i + 1]){
            ind = i + 1;
            break;
        }
    }
    
    let arr = nums.slice(ind);
    arr.push(...nums.slice(0, ind));    
    
    return isSorted(arr);
};

function isSorted(arr){
    
    for(let i = 0 ; i < arr.length - 1 ; i++){
        if(arr[i] > arr[i + 1]) return false;
    }
    
    return true;
}