public class Solution {
    public IList<int> FindDuplicates(int[] nums) {
        
        List<int> list = new List<int>();
        Dictionary<int,int> dict = new Dictionary<int,int>();
        
        foreach(int n in nums){
            if(dict.ContainsKey(n)){
                dict[n]++;
            }else{
                dict.Add(n,1);
            }
        }
        
        foreach(KeyValuePair<int,int> k in dict){
            if(k.Value>=2){
                list.Add(k.Key);
            }
        }
        
        return list;
    }
}