public class Solution {
    public int CountLargestGroup(int n) {
        
        var map = new Dictionary<int,int>();
        var max = 0;
        var count = 0;
        
        for(int i=1 ; i<=n ; i++){
            var sum = SumDigits(i);
            if(map.ContainsKey(sum)){
                map[sum]++;
            }else{
                map.Add(sum,1);
            }
            
            if(map[sum]>max) max = map[sum];
        }
        
        foreach(var kvp in map)
            if(kvp.Value == max) count++;
        
        return count;      
    }
    
    public static int SumDigits(int n){
        
        var s = n.ToString();
        var sum = 0;
        
        foreach(char c in s){
            sum+=int.Parse($"{c}");
        }
        
        return sum;
    }
}