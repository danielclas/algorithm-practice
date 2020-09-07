public class Solution {
    
    int sum = 0;
    int left;
    int right;
    
    public int RangeSumBST(TreeNode root, int L, int R) {
        
        left = L;
        right = R;
        
        TraverseAndSum(root);
        
        return sum;
    }
    
    public void TraverseAndSum(TreeNode node){
        
        if(node == null) return;
        
        TraverseAndSum(node.left);
        
        if(node.val >= left && node.val <= right) sum+=node.val;
        
        TraverseAndSum(node.right);        
        
    }
}