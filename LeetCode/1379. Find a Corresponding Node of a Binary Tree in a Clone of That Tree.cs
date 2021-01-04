public class Solution {
    
    TreeNode res;
    TreeNode target;
    
    public TreeNode GetTargetCopy(TreeNode original, TreeNode cloned, TreeNode target) {
        
        this.target = target;
        
        Traverse(cloned);
        
        return res;
    }
    
    public void Traverse(TreeNode node){
        
        if(node == null) return;        
        
        Traverse(node.left);
    
        if(node.val == target.val){
            res = node;
        }
    
        Traverse(node.right);
    }
}