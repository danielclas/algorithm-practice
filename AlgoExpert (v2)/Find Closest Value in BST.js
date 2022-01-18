function findClosestValueInBst(tree, target) {
	const current = { diff: +Infinity };
	
	traverse(tree, target, current);
	
	return current.value;
}

function traverse(node, target, current){
	if(node){
		const diff = Math.abs(node.value - target);
		if(diff < current.diff){
			current.diff = diff;
			current.value = node.value;
		}
	}
	
	if(node?.left) traverse(node.left, target, current);
	if(node?.right) traverse(node.right, target, current);
}

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Do not edit the line below.
exports.findClosestValueInBst = findClosestValueInBst;
