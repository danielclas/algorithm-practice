public class Solution {
    public int XorOperation(int n, int start) {
        
        var nums = new List<int>();
        int res;
        
        for(int i=0 ; i<n ; i++){
            nums.Add(start + 2 * i);
        }
        
        res = nums[0];
        
        for(int i=1 ; i<n ; i++){
            res = res ^ nums[i];
        }
        
        return res;       
        
    }
}