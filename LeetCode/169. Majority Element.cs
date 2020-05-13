public class Solution {
    public int MajorityElement(int[] nums) {
        
        int k = nums.Length / 2;
        Dictionary<int,int> dict = new Dictionary<int,int>();
        
        foreach(int n in nums){
            if(dict.ContainsKey(n)){
                dict[n]++;
            }else{
                dict.Add(n,1);
            }
        }
        
        foreach(KeyValuePair<int,int> kp in dict){
            if(kp.Value>k){
                return kp.Key;
            }
        }
        
        return 0;
    }
}