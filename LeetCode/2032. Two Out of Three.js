/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
 var twoOutOfThree = function(nums1, nums2, nums3) {
    
    const arr1 = {}, arr2 = {}, arr3 = {};
    const result = [];
    
    for(let n of nums1) arr1[n] = true;
    for(let n of nums2) arr2[n] = true;
    for(let n of nums3) arr3[n] = true;
    
    for(let n of nums1)
        if(arr2[n] || arr3[n])
                result.push(n);    
    
    for(let n of nums2)
        if(arr1[n] || arr3[n]) 
                result.push(n);
    
    for(let n of nums3)
        if(arr1[n] || arr2[n])
                result.push(n);
    
    return result.filter((value, index, self) => self.indexOf(value) === index);
    
};