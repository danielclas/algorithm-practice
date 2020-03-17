public class Solution {
    public string FrequencySort(string s) {
        
        var table = new Dictionary<char,int>();
        StringBuilder sb = new StringBuilder();
        
        foreach(char c in s){
            if(table.ContainsKey(c)){
                table[c]++;
            }else{
                table.Add(c,1);
            }
        }
        
        foreach(var k in table.OrderBy(x => x.Value)){
            for(int i=0 ; i<k.Value ; i++){
                sb.Append(k.Key);
            }
        }
        
        var r = new StringBuilder();
        
        for(int i=sb.Length-1 ;i>=0;i--){
            r.Append(sb[i]);
        }
        
        return r.ToString();
    }
}