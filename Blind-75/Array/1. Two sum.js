/*
    Task: 

    Given an array of integers nums and an integer target, 
    return indices of the two numbers such that they add up to target.

    You may assume that each input would have exactly one solution, 
    and you may not use the same element twice.

    You can return the answer in any order.
*/

 var twoSum = function(nums, target) {
    const temp = {}; // 1
    
    for(let i = 0 ; i < nums.length ; i++){ // 2
        const num = target - nums[i]; // 3
        temp[num] = i; // 4        
    }
    
    for(let i = 0 ; i < nums.length ; i++){ // 5
        if(temp[nums[i]] && temp[nums[i]] != i) return [temp[nums[i]], i]; // 6        
    }
    
    return [];
};

/**
 * In this task we are asked to return the indices of the two elements
 * of the input array that add up to target.
 * 
 * The first solution that comes to mind is using a nested for loop 
 * to add each num against each other and return the indices where
 * that sum adds up to target. This is a O(n2) solution, and is not
 * the most optimal.
 * 
 * The most optimal solution es O(n), where we traverse the array
 * on two different ocassions: first to add to an object (which we
 * use here as a hashtable) the differences between target num and
 * each num of the array, using this calculation as the key and
 * the index of num as the value. Then we traverse the array again,
 * and check which num represents that previously calculated difference.
 * 
 * 1. We declare a variable that will hold the key-value pairs for
 * storing the differences mentioned above.
 * 
 * 2. We iterate through the array for the first time. 
 * 
 * 3. We declare a variable num where we will store the difference between
 * target and nums[i]. So if target = 9 and nums[i] = 2, the result would be 7.
 * 
 * 4. We store in our object this number, using it as the key, and index as the value.
 * 
 * 5. We iterate through the array a second time.
 * 
 * 6. In this second iteration, we want to find which number is the difference needed
 * to fulfil our previous calculations. Consider this input example:
 * 
 *      nums = [2,7,11,15], target = 9
 * 
 * After our first iteration, our 'temp' variable would be populated like so:
 *  temp: {
 *      7: 0,
 *      2: 1,
 *      -2: 2,
 *      -6: 3    
 *  }
 * 
 * This can be read like this: for the number at position 0 (nums[i] = 2), I'd need a 7 
 * to reach target. For the number at position 1 (nums[i] = 7), I'd need a 2 to reach
 * target.. and so on. 
 * 
 * Therefore, in this second iteration, what we are asking is this: what is the index of
 * the number, if it exists, that added to the number of my current iteration, would
 * add up to 7? If we look at our input example, our first time doing our second iteration
 * would return our desired result, because nums[0] = 2 and an entry (key-value pair) with the
 * key '2' exists in our 'temp' variable. That entry holds the index of the number that, added
 * to my current iterations's value (nums[0] = 2), would reach target. Therefore we return
 * the value stored at that temp[key] and our current index.
 */