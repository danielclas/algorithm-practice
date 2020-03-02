public class Solution {
    public bool UniqueOccurrences(int[] arr) {
        
        Dictionary<int,int> table = new Dictionary<int,int>();        
        
        foreach(int n in arr){
            if(table.ContainsKey(n)){
                table[n]++;
            }else{
                table.Add(n,1);
            }
        }
        
        return table.Values.Count == table.Values.ToList().Distinct().Count();
        
    }
}