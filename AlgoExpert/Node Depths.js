function nodeDepths(root) {
    let arr = [0];
      
      if(root.left) traverse(root.left, arr, 0);
      if(root.right) traverse(root.right, arr, 0);
      
      return arr.reduce((a,b) => a + b, 0);
  }
  
  function traverse(node, arr, depth){
      arr.push(++depth);
      
      if(node.left) traverse(node.left, arr, depth);
      if(node.right) traverse(node.right, arr, depth);
  }
  
  // This is the class of the input binary tree.
  class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  // Do not edit the line below.
  exports.nodeDepths = nodeDepths;
  