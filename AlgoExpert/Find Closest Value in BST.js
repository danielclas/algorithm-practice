class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
/**
 * Task: Write a function that takes in a BST and a target
 * integer value, and returns the closest value to that target
 * value contained in the BST.
 */

//Solution 1 - Converting tree to array
function findClosestValueInBst(tree, target) {
    let arr = arrayFromTree(tree, []); //1
	
    if(arr.includes(target)) return target; //7

    let min = Number.MAX_VALUE; //8

    for(let n of arr){ //9
        if(Math.abs(n - target) < Math.abs(min - target)){ //10
            min = n;
        }
    }

    return min; //11
}

function arrayFromTree(node, arr){ //2
	if(node.left) arrayFromTree(node.left, arr); //3
	arr.push(node.value); //4
	if(node.right) arrayFromTree(node.right, arr); //5
	
	return arr; //6
}

/**
 * 1. First, we declare an array variable that will contain
 * the result of the 'arrayFromTree' function. We call this
 * function with our root node, and an empty array to populate.
 * 
 * 2. The 'arrayFromTree' function converts our BST to an
 * array. We traverse it in order and populate our entry
 * array with the value from the nodes.
 * 
 * 3. If there is a left child, we traverse it first
 * 4. We push our current node's value to the array
 * 5. If there is a right child, we traverse it
 * 6. Once we have traversed all nodes, we return the array.
 * 
 * 7. Back in our 'main' function, we check to see if an element
 * of the array is equal to our target value (it would mean that
 * the difference between the two is 0, which is the lowest possible
 * difference). If we find such element, we simply return it.
 * 
 * 8. If we don't find such element, we declare a variable min
 * which will act as our answer. We assign it the maximum value for
 * number so that we can compare against it when trying to find the
 * minimum difference.
 * 
 * 9. We iterate the array that contains all the nodes in order
 * 10. If the absolute difference between any element and the target
 * value is lesser than the absolute difference between our current min
 * value (initially Number.MAX_VALUE) and the target value, then we
 * assign min with such element.
 * 
 * 11. Once we have iterated our array, we return our min variable.
 */


//---------------------------------------
//Solution 2 - Traversing tree in order
function findClosestValueInBst(tree, target) {
    return findClosest(tree, [Number.MAX_VALUE, target], target); //1
}

function findClosest(node, arr, target) {
   if(node.left) findClosest(node.left, arr, target); //2
   
   let val = Math.abs(node.value - target); //3
   if(val < arr[0]){ //4
       arr[0] = val; //5
       arr[1] = node.value; //6
   }
   
   if(node.right) findClosest(node.right, arr, target); //7
   
   return arr[1]; //8
}

/**
 * 1. From our 'main' function, we call our helper 'findClosest'
 * function which will return our answer for us. We invoke it with
 * our initial node, an array that consists of 
 *          a. an initial value for our current difference, which
 *             in this case we want to set to Number.MAX_VALUE. we
 *             will use to control and store a lesser difference
 *          b. an initial potential answer, which we will set as
 *             our actual target. Since we are guaranteed an answer,
 *             the closest difference we could find would be with
 *             the target itself.
 * and our target value itself.
 * 
 * 2. Inside our 'findClosest' function, we first traverse to
 * our left node to check its value.
 * 
 * 3. We store the difference between the target value and our current
 * node's value in a variable.
 * 
 * 4. We compare the value we just calculated to check if it is smaller
 * that the one we have in the first position of our array. In this problem
 * we are not using this array because we need a list of things, we are
 * using it because we can pass its reference around so all iterations
 * of our 'findClosest' function can deal with the same instance.
 * 
 * 5. If the previous comparison returns true, then we store in the
 * first position of the array the calculated difference (step 3), and
 * in the second position the value of the current node which was used
 * to calculate said difference.
 * 
 * 6. If there is a right node, we traverse to it.
 * 7. Finally, we return the second element of the array, which
 * as we saw above will contain the value of the node which produced
 * the smallest difference with our target value.
 */
