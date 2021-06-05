
//1. Naive solution. O(n^3)
function threeNumberSum(array, targetSum) {
    let result = [];
    
    array.sort((a,b) => a - b);
    
    for(let i = 0 ; i < array.length - 2 ; i++){
        for(let j = i + 1 ; j < array.length - 1 ; j++){
            for(let k = j + 1 ; k < array.length ; k++){
                let a = array[i], b = array[j], c = array[k];
                if(a + b + c == targetSum){
                    result.push([a,b,c]);
                }
            }
        }
    }
    
    return result;
}

/**
 * Task: Find all triplets that add up to targetSum
 * and return the answer array sorted
 */

//2. Efficiente solution O(n^2)
function threeNumberSum(array, targetSum) {
  
	let result = []; //1
	
	array.sort((a,b) => a - b); //2
	
	for(let i = 0 ; i < array.length - 2 ; i++){ //3
		let left = i + 1 //4
		let right = array.length - 1; //4
		
		while(left < right){ //5
			let currentSum = array[i] + array[left] + array[right]; //6
			
			if(currentSum == targetSum){ //7
				result.push([array[i], array[left], array[right]]);
				right--;
				left++;
			}else if(currentSum > targetSum) right--; //8
			else left++; //9
		}
	}
	
	return result; //10
}

/**
 * 1. Declare a return array where we'll store all triplets
 * 
 * 2. Sort the array. This is key because as we'll see, in our solution
 * we depend on moving one of two pointers forward or backward to reach the
 * desired targetSum based on whether the current sum is greater or lesser
 * than the target. If the array was not initially sorted, this wouldn't be possible.
 * 
 * 3. We iterate through the array. We make sure to do so only until 2 positions from
 * its last element, given that we are looking for triplets.
 * 
 * 4. We declare two pointers, a left and a right one. The left pointer would be placed
 * the element after the current i element, and the right pointer would always start at
 * the last element of the array.
 * 
 * 5. We start iterating until we have overlapped our pointer (i.e., left is greater or
 * equal to right).
 * 
 * 6. Inside our iteration, we create a current sum variable to store the current sum between
 * elements at position i, left, and right. So with example array [0, 4, 10, 15, 20], pointers
 * would be placed like so: 
 *   i  l          r
 *  [0, 4, 10, 15, 20], currentSum = 24, targetSum = 19
 * 
 * 7.  With that sum calculated, we asked if it equals the targetSum. If it does, we would
 * simply add these three elements (array[i], array[left], array[right]) to our answer array.
 * After doing that, we need to make sure we advance left pointer one position to the right,
 * and left pointer one position to the left. Since we know all elements are distinct (this is
 * asserted in the assignment), we don't have to check whether to move only right or left, and
 * can move both in its proper direction. At our current iteration (from step 6), this evaluates
 * to false.
 * 
 * 8. Here we check if the current sum is greater than the target sum, and we do this to know
 * which of the two pointers (left or right) should be moved. Since the array is sorted, if
 * current sum was greater than target sum (and thus it would make us look for a smaller current sum),
 * we would move the right pointer one position to the left. This guarantees us that our next current sum
 * would be smaller, because array is sorted.
 * 
 * 9. Finally if the previous condition is false, we move left one position forward. This would mean we
 * are looking for a greater currentSum, and thus we'd want a greater element to add to the sum.
 * So in this example from step 6, after step 8 and 9, our pointers would be placed like so:
*   i  l        r  
 *  [0, 4, 10, 15, 20], currentSum = 24, targetSum = 19. Current sum is greater, so me moved right to the left.
 * 
 * Given that on the next iteration (step 6) this will evaluate to true, we do as expected on step 7.
 * On our next iteration, i would still be placed at 0, but we would have moved left and right on its
 * proper direction to continue checking if any sum including 0 (array[i]) adds up to targetSum.
 * After left has overlapped right, we simply continue with our outer for iteartion, placing i at 4 and
 * starting from there again.
 * 
 * 10. Finally we return the populated array. We know this will be sorted, so we don't have to worry
 * about ordering it once we are done filling it.
 * 
 */
  