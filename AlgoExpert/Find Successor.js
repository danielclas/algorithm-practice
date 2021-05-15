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
    let arr = traverse(tree, []);
      
      let i = arr.indexOf(node);
      
      return i != -1 && i + 1 < arr.length ? arr[i + 1] : null;	
  }
  
  function traverse(tree, arr){
      if(tree.left) traverse(tree.left, arr);
      arr.push(tree);
      if(tree.right) traverse(tree.right, arr);
      
      return arr;
  }
    