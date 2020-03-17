public class Solution {
    public IList<int> TopKFrequent(int[] nums, int k) {
        
        var table = new Dictionary<int,int>();
        IList<int> list = new List<int>();
        
        foreach(int num in nums){
            if(table.ContainsKey(num)){
                table[num]++;
            }else{
                table.Add(num,1);
            }
        }
        
        int count = 0;
        
        foreach(var item in table.OrderByDescending(x => x.Value)){
            list.Add(item.Key);
            count++;
            if(count==k){
                break;
            }
        }
        
        return list;
    }
}