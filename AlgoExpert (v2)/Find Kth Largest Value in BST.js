// This is an input class. Do not edit.
class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function findKthLargestValueInBst(tree, k) {
      const arr = traverse(tree, []);
      return arr.sort((a,b) => a - b)[arr.length - k];
  }
  
  function traverse(node, array){
      if(node) array.push(node.value);
      
      if(node?.left) traverse(node?.left, array);
      if(node?.right)	traverse(node?.right, array);
      
      return array;
  }
  
  // Do not edit the lines below.
  exports.BST = BST;
  exports.findKthLargestValueInBst = findKthLargestValueInBst;
  