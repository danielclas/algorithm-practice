public class Solution {
    public int DominantIndex(int[] nums) {
        
        var max = Int32.MinValue;
        
        foreach(int n in nums){
            if(n>max) max = n;
        }
        
        foreach(int n in nums){
            if(n!=max && n*2>max)
                return -1;
        }
        
        return Array.IndexOf(nums,max);
    }
}