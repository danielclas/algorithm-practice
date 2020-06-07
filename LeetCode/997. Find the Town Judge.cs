public class Solution {
    public int FindJudge(int N, int[][] trust) {
        
        var values = new Dictionary<int,int>();
        var temp = new HashSet<int>();
        
        if(N == 1 && trust.Length == 0) return 1;
        
        foreach(var arr in trust){
            if(values.ContainsKey(arr[1])){
                values[arr[1]]++;
            }else{
                values.Add(arr[1],1);
            }
            
            temp.Add(arr[0]);
        }
        
        foreach(var kvp in values){
            if(kvp.Value == N-1 && !temp.Contains(kvp.Key)){
                return kvp.Key;
            }
        }
        
        return -1;
    }
}