function nodeDepths(root) {
    traverse(root);
  
      let acum = { value: 0 }
      
      sum(root, acum);
      
      return acum.value;
  }
  
  function sum(node, acum){
      if(node){
          acum.value += node.depth;
          sum(node?.left, acum);
          sum(node?.right, acum);
      }	
  }
  
  function traverse(node, depth = 0){
      if(node){
          node.depth = depth;
          traverse(node.left, depth + 1);
          traverse(node.right, depth + 1);
      }	
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
  