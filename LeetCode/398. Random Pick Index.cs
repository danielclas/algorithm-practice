public class Solution {

    Dictionary<int,List<int>> table;
    
    public Solution(int[] nums) {
        
        table = new Dictionary<int,List<int>>();
        
        for(int i=0 ; i<nums.Length ; i++){
            if(!table.ContainsKey(nums[i])){
                table.Add(nums[i],new List<int>());
            }
            
            table[nums[i]].Add(i);
        }
    }
    
    public int Pick(int target) {
        
        var list = table[target];
        int random = new Random().Next(0,list.Count);
        
        return list[random];
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * Solution obj = new Solution(nums);
 * int param_1 = obj.Pick(target);
 */