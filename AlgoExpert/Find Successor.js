// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}
  
/**
 * Task: Write a function that takes in a binary tree as well
 * as a node contained in that tree and return the given node's succesor.
 * A node's successor is the next node to be visited when using IOT.
 */
function findSuccessor(tree, node) {
  let arr = traverse(tree, []); //1
  
  let i = arr.indexOf(node); //7
  
  return i != -1 && i + 1 < arr.length ? arr[i + 1] : null;	//8
}
  
function traverse(tree, arr){ //2
  if(tree.left) traverse(tree.left, arr); //3
  arr.push(tree); //4
  if(tree.right) traverse(tree.right, arr); //5
  
  return arr; //6
}
    
/**
 * 1. We start by calling our traverse function with an initial array.
 * This array will store all the nodes in the tree. 
 * 
 * 2. Our traverse function will traverse the tree in order, because
 * our assignment asks us to find a the succesor to a given node
 * in an in-order traversal.
 * 
 * 3. If there is a left child, we call traverse on it.
 * 4. We push our current node's value to the input array
 * 5. If there is a right child, we call traverse on it.
 * 6. Finally we return the populated input array.
 * 
 * 7. As an input to the 'main' function, we were given a node
 * that belongs to the tree. We were asked to find a successor to it.
 * Given this, we store the index of this input node in our populated array
 * in a variable. The array contains all nodes in the tree, and as such
 * this input node will be contained in it.
 * 
 * 8. If the index from the previous step is different than -1
 * (meaning our input node is present in the array) and index + 1
 * is within the bounds of the array, we return our array at index + 1,
 * meaning we return the succesor of the input node. If we any of this
 * conditions is false, we return null.
 */