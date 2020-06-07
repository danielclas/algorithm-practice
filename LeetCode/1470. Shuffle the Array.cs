public class Solution {
    public int[] Shuffle(int[] nums, int n) {
        
        if(n == 0 || nums.Length == 0) return nums;
        
        var list = new List<int>();
        
        for(int i=0, j=n ; list.Count!=nums.Length ; i++, j++){
            
            if(i<nums.Length) list.Add(nums[i]);
            if(j<nums.Length) list.Add(nums[j]);
        }
        
        return list.ToArray();
    }
}