
//         10
//     5       15
//   2   5       22
// 1
// 
// In-, pre- and post- prefix refers to
// the root of a given subtree. In other words
// it tells us whether our root node will be
// printed in order (natural order would be left-me-right,
// so we do that), before the children (me-left-right),
// or after the children (left, right, me)
// We will always print left node before right. Knowing this,
// we only need to know where to place the root (in, pre or post).


function inOrderTraverse(tree, array) {
  
  // 1, 2, 5, 5, 10, 15, 22
  // Left, then root, then right
  // Whenever we are at a giving node, we call
  // inOrderTraverse with the leftmost node, then
  // we grab our current node's value,
  // and then we traverse the right node.
  // At any node in the BST, we can say:
  //   1. We start by calling IOT on the left node
  //   2. We append to our array our current node's value
  //   3. We call IOT on the right node
  
  if(tree.left)	inOrderTraverse(tree.left, array);
    
  array.push(tree.value);
  
  if(tree.right) inOrderTraverse(tree.right, array);
  
  return array;
}
  
function preOrderTraverse(tree, array) {
  // 10, 5, 2, 1, 5, 15, 22
  // Root, then left, then right
  // We want to append the current value
  // to the array before we traverse to
  // this node's child nodes
  array.push(tree.value);
    
  if(tree.left) preOrderTraverse(tree.left, array);
  if(tree.right) preOrderTraverse(tree.right, array); 
  
  return array;
}
  
function postOrderTraverse(tree, array) {	
  // 1, 2, 5, 5, 22, 15, 10
  // Left, then right, then root
  // We want to traverse both child nodes
  // before we append this node's current values
  if(tree.left)	postOrderTraverse(tree.left, array);
  if(tree.right) postOrderTraverse(tree.right, array);  
    
  array.push(tree.value);
  
  return array;
}
  
// Do not edit the lines below.
exports.inOrderTraverse = inOrderTraverse;
exports.preOrderTraverse = preOrderTraverse;
exports.postOrderTraverse = postOrderTraverse;
  