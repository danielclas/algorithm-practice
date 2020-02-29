public class Solution {
    public bool ContainsDuplicate(int[] nums) {
        
        Dictionary<int,int> table = new Dictionary<int,int>();
        
        foreach(int n in nums){
            if(!table.ContainsKey(n)){
                table.Add(n,1);
            }else{
                return true;
            }
        }
        
        return false;        
    }
}