// This is the class of the input root.
// Do not edit it.
class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function branchSums(root) {
      return traverse(root, []);
  }
  
  function isLeaf(node){
      return !node.left && !node.right;
  }
  
  function traverse(node, array, sum = 0){
      if(node){
          if(isLeaf(node)) array.push(sum + node.value);
          else{	
              sum += node.value;
  
              traverse(node.left, array, sum);
              traverse(node.right, array, sum);
          }
      }
      
      return array;
  }
  
  // Do not edit the lines below.
  exports.BinaryTree = BinaryTree;
  exports.branchSums = branchSums;
  