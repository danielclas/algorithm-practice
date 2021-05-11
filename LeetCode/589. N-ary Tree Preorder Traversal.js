/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
 var preorder = function(root) {
    //Root, left, right    
    let arr = helper(root, []);
    return arr ?? [];
};

function helper(node, arr){
    if(!node) return;
    
    arr.push(node.val);
    if(node.children){
        for(let c of node.children){
            helper(c, arr);
        }
    }
    return arr;
}