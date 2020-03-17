public class Solution {
    public int FindKthLargest(int[] nums, int k) {
    
        var arr = Sort(nums);
        
        return arr[arr.Length-k];
        
    }
    
    public int[] Sort(int[] nums){
        
        int temp = 0;
        
        for(int i=0 ; i<nums.Length-1 ; i++){
            for(int j=i+1 ; j<nums.Length ; j++){
                if(nums[i]>nums[j]){
                    temp = nums[i];
                    nums[i] = nums[j];
                    nums[j] = temp;
                }
            }
        }
        
        return nums;
    }
    
    
}