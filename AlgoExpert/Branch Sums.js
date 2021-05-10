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
    let arr = [];
        
    if(root.left) sum(root.left, arr, root.value);
    if(root.right) sum(root.right, arr, root.value);

    return arr.length == 0 ? [root.value] : arr;
}

function sum(node, arr, acum){
    if(!node.left && !node.right){
        arr.push(acum + node.value);
    }
    
    if(node.left){
        sum(node.left, arr, acum + node.value);
    }
    
    if(node.right){
        sum(node.right, arr, acum + node.value);	
    }
}

// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.branchSums = branchSums;
  