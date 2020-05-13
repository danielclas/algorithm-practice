public class Solution {
    public int RepeatedNTimes(int[] A) {
        
        var table = new Dictionary<int,int>();
        var size = A.Length/2;
        
        foreach(int n in A){
            if(table.ContainsKey(n)){
                table[n]++;
            }else{
                table.Add(n,1);
            }
        }
        
        foreach(var kvp in table){
            if(kvp.Value == size){
                return kvp.Key;
            }
        }
        
        return 0;
    }
}