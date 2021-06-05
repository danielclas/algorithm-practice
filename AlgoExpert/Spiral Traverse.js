
/**
 * Write a function that takes in an n * m two-dimensional array, and returns
 * a one-dimensional array of all the array's elements in spiral order.
 */
function spiralTraverse(array) {
    let result = []; //1
    let len = 0; //2
    
    for(let a of array) len += a.length; //3
    
    while(result.length != len){ //4
        //Col to the right
        result.push(...array.shift()); //5
        
        //Row to the bottom
        for(let a of array) result.push(a.pop()); //6
        
        if(result.length == len) return result; //7
        
        //Col to the left
        let b = array.pop(); //8
        b.reverse(); //9
        result.push(...b); //10	
        
        //Row to the top
        b = []; //11
        for(let a of array) b.push(a.shift()); //12
        b.reverse(); //13
        result.push(...b); //14		
        
    }
    
    return result;
}

/**
 * Example matrix: 
 *  [[1, 2, 3, 4],
 *   [12, 13, 14, 5],
 *   [11, 16, 15, 6],
 *   [10, 9, 8, 7]]
 * 
 * 1. We declare a result array in which we'll store the items to be returned
 * 
 * 2. We declare a len variable where we want to keep the count of the total amount of elements
 * in the input matrix
 * 
 * 3. We iterate through the input matrix and add to the len variable the length of each of its
 * array elements
 * 
 * 4. We start iterating until the length of the result array equals the value in our len variable. This means
 * we have pushed the same amounts of elements to the result array as there are elements in our input matrix.
 * 
 * 5. Here we start simulating our spiral traversing. Spiral traversing indicates we will first move to
 * the right, then to the bottom, then to left, and then to the top, to start again to the right and continue
 * with this order. Naturally when we start again from the right, we want to make sure that we don't land on
 * an element we have already pushed to the result array. With this solution this will not be a problem, 
 * because we are popping and shifting elements from the matrix, so those elements won't be present in the
 * input matrix anymore.
 * 
 * So, to simulate our first crawl to the right, we simply add the entire first row of the input matrix to
 * the result array. After this first step, our matrix and result array would look like so:
 * 
 *      Input matrix          Result array
 *   [[12, 13, 14, 5],      [1,2,3,4]
 *   [11, 16, 15, 6],
 *   [10, 9, 8, 7]]
 * 
 * Notice that the first row of the input matrix is no longer present because we have shifted it and
 * added it to the result array using destructuring.
 * 
 * 6. For our next step, we want to add every last element of every row to the result array. If we 
 * picture an imaginary pointer that is placed at the top right corner of our matrix, we would now
 * traverse all the way down to the bottom right corner of it, adding every element to the result array.
 * Notice that thanks to using the pop function, we don't have to worry about different row sizes (which
 * we are likely going to receive in our input matrix). So in this step we would iterate all the current rows
 * of the matrix (remember that the first row has already been shifted), and pop their last elements.
 * After this step, input matrix and result array would looke like so:
 * 
 *      Input matrix          Result array
 *   [[12, 13, 14],      [1,2,3,4,5,6,7]
 *   [11, 16, 15],
 *   [10, 9, 8]]
 * 
 * 7. At this point we ask if we have completely filled the result array. This is here to special case a
 * matrix of n columns where its rows have only 1 element (i.e a matrix of 10 row with 1 element each)
 * 
 * 8. After step 6, our imaginary pointer would be placed at the bottom right of our matrix. We now want
 * to move it to the bottom left of it, and to push every element along the way. We do this by first obtaining
 * that bottom-most row by simply popping the last row of the matrix and storing it in a variable.
 * 
 * 9. Once we have that row, which is an array itself, we call reverse on it so that it's ordered properly. 
 * We could also iterate it from right to left.
 * 
 * 10. After that, we add it to the result array using destructuring. After this step, input matrix and
 * result array would look like so:
 *  
 *      Input matrix          Result array
 *   [[12, 13, 14],      [1,2,3,4,5,6,7,8,9,10]
 *   [11, 16, 15]]
 * 
 * 11. We assing 'b' variable with an empty array to which we will push elements next.
 * 
 * 12. We shift every row of the matrix (obtain the first element of each array in it) and store it in b.
 * 
 * 13. After that we call reverse on 'b' for the same reason we  did on step 9. On step 12 our imaginary
 * pointer would be in the bottom left and we'd want it to move to the top left and push elements allong the way.
 * This is the same as going from top left to bottom left and then calling reverse on the elements obtained.
 * 
 * 14. Once we do that, we add this elements to the result array using destructuring. After that we
 * start iterating again from step 5. After our first iteration, our input matrix and result array would be:
 *  
 *      Input matrix          Result array
 *   [[13, 14],      [1,2,3,4,5,6,7,8,9,10,11,12]
 *   [16, 15]] * 
 * 
 * 15. When we have finished iterating, we simply return the result array.
 */
  