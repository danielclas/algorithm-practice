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
 var goodNodes = function(root) {
    let count = { value: 1 };
    
    traverse(root?.left, count, root.val);
    traverse(root?.right, count, root.val);
    
    return count.value;
};

function traverse(node, count, max){
    if(node){
        if(node.val >= max){
            max = node.val;
            count.value++;
        }
        if(node.left)
            traverse(node.left, count, max);
        if(node.right)
            traverse(node.right, count, max);
    }
}