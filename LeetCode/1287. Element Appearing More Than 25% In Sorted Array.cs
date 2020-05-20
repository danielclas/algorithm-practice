public class Solution {
    public int FindSpecialInteger(int[] arr) {
        
        var map = new Dictionary<int,int>();
        
        foreach(int n in arr){
            if(map.ContainsKey(n)){
                map[n]++;
                if(map[n]>arr.Length*0.25){
                    return n;
                }
            }else{
                map.Add(n,1);
                if(arr.Length==1) return n;
            }
        }
        
        return 0;
    }
}