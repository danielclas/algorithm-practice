/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var sumEvenGrandparent = function(root) {
    
    return traverse(root, []).reduce((a,b) => a + b, 0);
};

function traverse(node, arr){
    if(!node) return [];
    
    if(node.val % 2 == 0) sumChildren(node, arr);
    
    if(node.left) traverse(node.left, arr);
    if(node.right) traverse(node.right, arr);
    
    return arr;
}

function sumChildren(node, arr){
    if(node.left){
        let l = node.left.left ? node.left.left.val : 0;
        let r = node.left.right ? node.left.right.val : 0;
        arr.push(l, r);
    }
    
    if(node.right){
        let l = node.right.left ? node.right.left.val : 0;
        let r = node.right.right ? node.right.right.val : 0;
        arr.push(l, r);        
    }
}