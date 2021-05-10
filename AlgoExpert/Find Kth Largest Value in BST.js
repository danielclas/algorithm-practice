// This is an input class. Do not edit.
class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
function findKthLargestValueInBst(tree, k) {
    return postOrderTraverse(tree, [], k)[k - 1];
}

function postOrderTraverse(tree, array, k){
    if(array.length < k){
        if(tree.right) postOrderTraverse(tree.right, array, k);   
        array.push(tree.value);     
        if(tree.left)	postOrderTraverse(tree.left, array, k);		
    }		

    return array;	
}
  
  // Do not edit the lines below.
  exports.BST = BST;
  exports.findKthLargestValueInBst = findKthLargestValueInBst;
  