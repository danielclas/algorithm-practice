/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
 var postorder = function(root) {
    let arr = traverse(root, []);
    return arr ?? [];
};

function traverse(node, arr){
    if(!node) return;          
    
    if(node.children){
        for(let n of node.children)
            traverse(n, arr);        
    }   
    
    arr.push(node.val);         
    
    return arr;
}