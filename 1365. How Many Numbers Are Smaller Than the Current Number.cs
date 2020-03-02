public class Solution {
    public int[] SmallerNumbersThanCurrent(int[] nums) {
        
        List<int> list = new List<int>();
        int count = 0;
        
        for(int i=0 ; i<nums.Length ; i++){
            for(int j=0 ; j<nums.Length ; j++){
                if(j!=i && nums[i]>nums[j]){
                    count++;
                }
            }
            list.Add(count);
            count=0;
        }
        
        return list.ToArray();
    }
}