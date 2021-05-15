class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
}
  
/**
 * Task: Write a function that takes in a binary tree and
 * returns a list of its branch sums ordered from leftmost
 * branch to rightmost branch sum
 */

function branchSums(root) {
    let arr = []; //1
        
    if(root.left) sum(root.left, arr, root.value); //2
    if(root.right) sum(root.right, arr, root.value); //3

    return arr.length == 0 ? [root.value] : arr; //7
}

function sum(node, arr, acum){
    if(!node.left && !node.right){ //4
        arr.push(acum + node.value);
    }
    
    if(node.left){ //5
        sum(node.left, arr, acum + node.value);
    }
    
    if(node.right){ //6
        sum(node.right, arr, acum + node.value);	
    }
}
  
/**
 * 1. We create an empty array to which we will push all of our
 * branch sums.
 * 
 * 2. If there is a left child to our root node, we call our sum
 * function with it, passing it our array and our initial acum value,
 * which will be our root node value.
 * 
 * 3. If there is a right child, we do de same as above. We do it in this
 * order because our assignment is specifically asking us to push
 * in our answer array from leftmost to rightmost.
 * 
 * 4. If in any given iteration within our sum function, we encounter
 * a leaf node (a node with no right or left child), we know we have
 * reached the end of a branch, and therefore push the current acum
 * value to our array.
 * 
 * 5. If there is a left child node, we call sum again with it,
 * passing it our array and our current acum plus our current node value.
 * 
 * 6. We do the same as in step 5 with the right child node, if there is one.
 * As mentioned above, the question is asking us to push into our answer
 * array from left to right, so we abide by that order here too. By always 
 * going to the left child node we make sure we are always traversing
 * to our leftmost branch.
 * 
 * 7. Once our sum function has finished traversing our tree, we simply
 * check our initial array (which we passed in as a reference parameter
 * to our sum function, which for this reason doesn't need to return anything)
 * for its length. If its length is 0, this mean the root node has no children
 * nodes, in which case we return an array with its value. Otherwise
 * we return the array we have just populated with our sum function.
 *  
 */