public class Solution {
    public IList<int> FindDisappearedNumbers(int[] nums) {
        
        List<int> list = new List<int>();
        Dictionary<int,int> dict = new Dictionary<int,int>();
        Array.Sort(nums);
        
        foreach(int n in nums){
            if(!dict.ContainsKey(n)){
                dict.Add(n,1);
            }
        }
        
        if(nums.Length>0){
            for(int i=1 ; i<=nums.Length ;i++){
                if(!dict.ContainsKey(i)){
                    list.Add(i);
                }
            }
            
            if(list.Count==0 && dict.Count==1){
                list.Add(nums[nums.Length-1]+1);
            }
        }
        
        return list;        
    }
}