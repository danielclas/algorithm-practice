//Solution 1 - Converting tree to array
function findClosestValueInBst(tree, target) {
    let arr = arrayFromTree(tree, []);
	
    if(arr.includes(target)) return target;

    let min = Number.MAX_VALUE;

    for(let n of arr){
        if(Math.abs(n - target) < Math.abs(min - target)){
            min = n;
        }
    }

    return min;
}

function arrayFromTree(node, arr){
	if(node.left) arrayFromTree(node.left, arr);
	arr.push(node.value);
	if(node.right) arrayFromTree(node.right, arr);
	
	return arr;
}

// Do not edit the line below.
exports.findClosestValueInBst = findClosestValueInBst;


//Solution 2 - Traversing tree in order
function findClosestValueInBst(tree, target) {
    return findClosest(tree, [Number.MAX_VALUE, target], target);
}

function findClosest(node, arr, target) {
   if(node.left) findClosest(node.left, arr, target);
   
   let val = Math.abs(node.value - target);
   if(val < arr[0]){
       arr[0] = val;
       arr[1] = node.value;
   }
   
   if(node.right) findClosest(node.right, arr, target);
   
   return arr[1];
}

function calc(value, target, prev){
   let val = Math.abs(target - value);
   return val < prev ? val : prev;
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
