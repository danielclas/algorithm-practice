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
 var minDepth = function(root) {
    let depth = traverse(root, [Number.MAX_VALUE], 1);
    return depth[0];
};

function traverse(node, arr, depth){
    if(!node) return [0];
    
    if(!node.left && !node.right){
        arr[0] = depth < arr[0] ? depth : arr[0];
    }
    
    if(node.left) traverse(node.left, arr, depth + 1);    
    if(node.right) traverse(node.right, arr, depth + 1);
    
    return arr;
}