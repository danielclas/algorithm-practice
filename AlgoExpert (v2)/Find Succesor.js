// This is an input class. Do not edit.
class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
      this.parent = null;
    }
  }
  
  function findSuccessor(tree, node) {
    const arr = traverse(tree, []);
      const index = arr.findIndex(n => n === node);
      
    return index === -1 || index === arr.length - 1 ? null : arr[index + 1];
  }
  
  function traverse(node, arr){
      if(node){
          traverse(node.left, arr);
          arr.push(node);
          traverse(node.right, arr);
      }
      
      return arr;
  }
  
  // Do not edit the lines below.
  exports.BinaryTree = BinaryTree;
  exports.findSuccessor = findSuccessor;
  