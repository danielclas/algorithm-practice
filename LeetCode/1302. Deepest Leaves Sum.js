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
 var deepestLeavesSum = function(root) {
    let res = [0, []];
    
    if(!root) return 0;
      
    if(root.left) traverse(root.left, res, 0);
    if(root.right) traverse(root.right, res, 0);
    
    return res[1].reduce((a,b) => a + b, 0);    
};

function traverse(node, res, depth){
    depth++;
    
    if(depth > res[0]){
        res[0] = depth;
        res[1] = [node.val];
    }
    else if(depth == res[0]) res[1].push(node.val);
    
    if(node.left) traverse(node.left, res, depth);
    if(node.right) traverse(node.right, res, depth);
}