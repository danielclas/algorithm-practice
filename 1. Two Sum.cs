public class Solution {
    public int[] TwoSum(int[] nums, int target) {
        int[] arr = new int[]{0,0};
        
        for(int i=0 ; i<nums.Length-1 ; i++){
            for(int k=i+1 ; k<nums.Length ; k++){
                if(nums[i]+nums[k]==target){
                    arr[0]=i;
                    arr[1]=k;
                    return arr;
                }
            }
        }
        
        return arr;
    }
}