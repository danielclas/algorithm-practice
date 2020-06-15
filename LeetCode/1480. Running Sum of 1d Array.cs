public class Solution {
    public int[] RunningSum(int[] nums) {
        
        var list = new List<int>();
        var sum = 0;
        
        foreach(int n in nums){
            sum+=n;
            list.Add(sum);
        }
        
        return list.ToArray();
    }
}