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
 * @return {number[]}
 */
 var preorderTraversal = function(root) {
    let arr = traverse(root, []);
    return arr ?? [];
};
    
function traverse(node, arr){
    if(!node) return;
    
    arr.push(node.val);
    if(node.left) traverse(node.left, arr);
    if(node.right) traverse(node.right, arr);
    
    return arr;
}