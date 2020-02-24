public class Solution {
    public void MoveZeroes(int[] nums) {
        
        int lastZero=-1;
        int temp;
        
        for(int i=0 ; i<nums.Length ; i++){
            if(nums[i]==0 && lastZero==-1){
                lastZero = i;
            }
            
            if(lastZero!=-1 && nums[i]!=0){
                temp = nums[i];
                nums[i] = nums[lastZero];
                nums[lastZero] = temp;
                lastZero=Array.IndexOf(nums,0);
            }
        }
    }
}