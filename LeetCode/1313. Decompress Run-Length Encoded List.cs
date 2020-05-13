public class Solution {
    public int[] DecompressRLElist(int[] nums) {
        
        List<int> list = new List<int>();
        int val = 0;
        
        for(int i = 0 ; i<nums.Length-1 ; i+=2){
            val = nums[i+1];
            for(int j = 1 ; j<=nums[i] ; j++){
                list.Add(val);
            }
        }
        
        return list.ToArray();
    }
}