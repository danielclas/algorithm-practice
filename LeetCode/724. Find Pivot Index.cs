public class Solution {
    public int PivotIndex(int[] nums) {
        
        int pivot = -1;
        int left = 0;
        int right = 0;
        
        foreach(int n in nums) right+=n;
        
        for(int i=0 ; i<nums.Length ; i++){
            if(right-nums[i]==left) return i;
            else{
                left+=nums[i];
                right-=nums[i];
            }
        }
        
        return pivot;
    }
}