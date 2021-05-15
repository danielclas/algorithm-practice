class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

/**
 * Task: write a function that takes in a BST and a positive integer k 
 * and returns the kth largest integer contained in the BST
 */

function findKthLargestValueInBst(tree, k) {
  return postOrderTraverse(tree, [], k)[k - 1]; //1 //7
}

function postOrderTraverse(tree, array, k){
  if(array.length < k){ //2.
      if(tree.right) postOrderTraverse(tree.right, array, k); //3
      array.push(tree.value); //4
      if(tree.left)	postOrderTraverse(tree.left, array, k); //5
  }		

  return array;	//6
}

/**
 * 1. From our 'main' function, we traverse our BST in a post-order manner
 * because we are finding the kth largest. Doing it in post-order makes this
 * more efficient as we know we will start pushing into our array from the largest
 * to the smallest value. Since we want the kth largest, it makes sense to start
 * from the end. We pass our postOrderTraverse function our entry tree, an empty
 * array that will be populated upon traversing, and the k parameter.
 * 
 * 2. We only keep iterating if our array is smaller than k. If our array is bigger
 * than k then we return it, because we know we will have at least k elements
 * in it, and therefore can access the kth largest of the tree.
 * 
 * 3. If there is a left child to our current node, we traverse it
 * 4. We push to the array our current node value
 * 5. If there is a right child to our current node, we traverse it
 * 6. We return the array to our main function.
 * 
 * 7. In our main function, we return as a result the element in the position
 * k - 1 of our array. If we take as an example the input tree below
 * 
 *          15
 *      5        20          
 *    2   5   17    22
 *  1   3  
 * 
 * Then our post order traverse function will populate the array in this order:
 *                    [22, 20, 17, 15, 5, 5, 3, 2, 1]
 * but since we will only keep adding to our array elements when its length
 * its lesser than 3, if we take as an example that k = 3, our traverse function
 * will populate the array only until 17 or 15 (since we are iterating our tree
 * in parallel, there might be a case where we add one more element than k), 
 * resulting in:
 *                    [22, 20, 17, 15]
 * Once we have our array back in our 'main' function, we simply acces its
 * k - 1 element. In this case k - 1 = 2, so our answer would be 17.
 */