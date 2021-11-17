/**
 * Given an integer array nums, 
 * return true if any value appears at least twice in the array, 
 * and return false if every element is distinct.
 */

 var containsDuplicate = function(nums) {
    
    const temp = {}; // 1
    
    for(let num of nums){ // 2
        if(temp[num]) return true; // 3
        temp[num] = true; // 4
    }
    
    return false; // 5
};

/**
 * This problem is asking us to spot any duplicate value
 * in the input array. The naive solution would be
 * using a nested for loop and returning true
 * anytime we see the same value at different indices.
 * The optimal solution is the one used above, where we
 * use an object to keep track of already-seen values.
 * 
 * 1. First we declare an object to use it as a hash table
 * to keep track of the values we encounter.
 * 
 * 2. We iterate the nums array.
 * 
 * 3. If at any point we find a number that was already 
 * stored in our object, that means its a duplicate, so
 * we return true.
 * 
 * 4. If the condition above wasn't met, we store
 * 'true' in our object using the number as the key.
 * 
 * 5. Finally, if we iterated through the array without finding
 * any duplicates, we simply return false;
 */