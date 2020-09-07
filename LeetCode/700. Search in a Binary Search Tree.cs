public class Solution {
    
    int target;
    TreeNode res;
    
    public TreeNode SearchBST(TreeNode root, int val) {
        
        target = val;
        
        Traverse(root);
        
        return res;
    }
    
    public void Traverse(TreeNode node){
        
        if(node == null) return;
        
        if(node.val == target) res = node;
        
        Traverse(node.left);
        Traverse(node.right);
    }
}