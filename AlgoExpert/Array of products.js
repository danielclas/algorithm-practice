//Inefficient O(n^2) time O(n) space
function arrayOfProducts(array) {
    let result = [];
    
    for(let i = 0 ; i < array.length ; i++){
        let num = 1;
        for(let j = 0 ; j < array.length ; j++){
            if(i != j) num *= array[j];
        }
        result.push(num);
    }
    
    return result;
}

/**
 * Task: Return an array that in each position includes the product of every element
 * of the array except for the element at i.
 */

//Efficient O(n) time/space
function arrayOfProducts(array) {
    let left = Array(array.length).fill(1); //1
    let right = Array(array.length).fill(1); //1
    
    let prodLeft = 1, prodRight = 1; //2
    
    for(let i = 0, j = array.length -1 ; i < array.length ; i++, j--){ //3
        left[i] = prodLeft; //4
        right[j] = prodRight; //4
        
        prodLeft *= array[i]; //5
        prodRight *= array[j]; //5
    }
    
    let result = []; //6
    
    for(let i = 0 ; i< array.length ; i++){ //7
        let n = right[i] * left[i];
        result.push(n);
    }
    
    return result; //8
}

/**
 * Example array [5, 1, 2, 4]
 * 
 * 1. We start by creating a left and right array of lenght = array.length to store our
 * products. This solution consists of storing the product of every element to the left
 * and of every element to the right of any given element. So, if we take for example
 * element at index 2 in example array (value 2), the array left[2] should contain
 * the product of every element to the left of array[2] (so 5 * 1), and array right[2] should
 * contain the product of every element to the right of array[2] (so 4). We fill these arrays
 * with ones to make sure that when we multiply for the first time, we are adding that number
 * we are multiplying with.
 * 
 * 2. On every iteration of the following step, we need an acumulator that will hold the total
 * product up to certain point in the array. We initialize this with a 1 for the same reason  as above. 
 * 
 * 3. We set two pointers (i and j) which will be placed respectively at position 0
 * and at the last element of the array. On each iteration we move this to the right and left
 * respectively.
 * 
 * 4. On every iteration, we first assign our left and right arrays at positions i and j
 * with the product corresponding to each arrays. We do this before multiplying by the current
 * number because we want to put at left and right array the product of every element before 
 * or after adding to said product variables the numbers of the current iteration.
 * 
 * 5. Once we have placed those numbers on left and right array, we multiply our current
 * accumulator variables with the current iteartion values to add them to the current corresponding
 * product. As an example, if we look at the array above, the end of our first iteration would look like:
 * 
 *   i        j           i                              j
 *  [5, 1, 4, 2], left = [1, 1, 1, 1], right = [1, 1, 1, 1], leftProduct = 5, rightProduct = 2.
 * 
 * Note that we assign to left[i] and right[j] before calculating the left and right product again.
 * This ensures as that array[i] and array[j] are not included in left and right product at the moment of
 * assigning them to the arrays.
 * 
 * After doing step 4 and 5 on this iteartion and advancing the pointers i and j, our arrays would be:
 * 
 *      i  j                 i                        j
 *  [5, 1, 4, 2], left = [1, 5, 1, 1], right = [1, 1, 2, 1], leftProduct = 5, rightProduct = 8
 * 
 * And if we iterate once again, we would see:
 * 
 *      j  i                    i                  j
 *  [5, 1, 4, 2], left = [1, 5, 5, 1], right = [1, 8, 2, 1], leftProduct = 20, rightProduct = 8
 * 
 * On our next iteration we would see:
 * 
 *   j        i                     i            j
 *  [5, 1, 4, 2], left = [1, 5, 5, 20], right = [8, 8, 2, 1]
 * 
 * On this last iteration we do calculate right and left product once again, but the result
 * of that is irrelevant because there won't be a next iteration on which to assign them
 * to left and right array.
 * 
 * So, we ended up with arrays  left = [1, 5, 5, 20] and right = [8, 8, 2, 1].
 * This can be read as follows: array at left at i contains the product of every element
 * to the left of input array at i. With our example array, left[3] contains
 * the product of input array at 0, 1 and 2 (5 * 1 * 4). The same goes for the right array,
 * but since we are coming from the right, it should be read on reverse. Right[0] contains
 * the product of every element to the right of input array at i. With our example array,
 * right[0] contains the product of input array at 1, 2, and 3 (1 * 4 * 2).
 * 
 * 6. After having populated left and right arrays, we create a result array to which
 * we would push the product of elements of left and right arrays.
 * 
 * 7. We iterate through left and right array, and for every index i, we push to our
 * result array the product of both arrays at i. Given the example from above:
 *                                           
 *  [5, 1, 4, 2], left = [1, 5, 5, 20], right = [8, 8, 2, 1]
 * 
 * on this iteration, we would start with 0, and push to our result array
 * the product of left[0] = 1 and right[0] = 8. This means that at result[0]
 * we would have the product of every element to the right of input array[0] (coming
 * from array right at position 0) and all the elements to the left of intput array[0] 
 * (coming from array left at position 0. In this case it would always be one because
 * there are no elements to the left). This for loop would result in:
 * 
 *  left   [1,   5,   5,  20]
 *          *    *    *    * 
 *  right  [8,   8,   2,   1] 
 *          =    =    =    =
 *  result [8,  40,  10,  20]
 * 
 * 8. Finally we just return the result array.
 */