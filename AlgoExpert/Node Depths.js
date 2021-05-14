function nodeDepths(root) {
  let arr = [0]; //1
    
  if(root.left) traverse(root.left, arr, 0); //2
  if(root.right) traverse(root.right, arr, 0); //3
    
  return arr.reduce((a,b) => a + b, 0); //7
}
  
function traverse(node, arr, depth){
  arr.push(++depth); //4
      
  if(node.left) traverse(node.left, arr, depth); //5
  if(node.right) traverse(node.right, arr, depth); //6
}

/**
 * 1. We declare an array with a single element of value 0.
 * If we happen to receive a root node without children,
 * then our only depth is zero, in which case we just return that.
 * 
 * 2. If the root node has a left value, we start traversing from there.
 * We invoke our 'traverse' function with a depth of 0 because that is
 * our initial depth.
 * 
 * 3. Same for right node of root if it exists. We call traverse on it
 * with an initial depth of 0
 * 
 * 4. Before we do anything else, anytime 'traverse' is invoked,
 * we push to our array of depths with the current depth + 1.
 * The '++depth' sytanx allows us to add 1 to the current depth value
 * before adding it. 
 * 
 * 5. If the current node has a left child, we call traverse on it.
 * 
 * 6. Same for right node
 * 
 * 7. Finally we call reduce on our array of depths to sum all depths
 * contained in it, and return that.
 * 
 * /

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
  

  