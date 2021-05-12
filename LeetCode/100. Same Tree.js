/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
 var isSameTree = function(p, q) {
    let res = traverse(p, q, [true]);
    return res ? res[0] : false;
};

function traverse(node1, node2, arr){
    if(!node1 && !node2) return [true];
    else if((!node1 && node2) || (node1 && !node2)) return [false];
    
    if(!arr[0]) return arr;
    
    let left1 = node1.left, left2 = node2.left;
    if((left1 && !left2) || (!left1 && left2)) arr[0] = false;
    else traverse(left1, left2, arr);
    
    if(node1.val != node2.val) arr[0] = false;
    
    let right1 = node1.right, right2 = node2.right;
    if((right1 && !right2) || (!right1 && right2)) arr[0] = false;
    else traverse(right1, right2, arr);
    
    return arr;
}