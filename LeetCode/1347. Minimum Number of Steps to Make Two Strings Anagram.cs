public class Solution {
    public int MinSteps(string s, string t) {
     
        var S = new Dictionary<char,int>();
        var T = new Dictionary<char,int>();
        var count = 0;
        
        for(int i=0 ; i<s.Length ; i++){
            if(S.ContainsKey(s[i])) S[s[i]]++;
            else S.Add(s[i],1);
            
            if(T.ContainsKey(t[i])) T[t[i]]++;
            else T.Add(t[i],1);
        }
        
        foreach(var kvp in S){
            if(T.ContainsKey(kvp.Key)){
                count+=kvp.Value-T[kvp.Key] > 0 ? kvp.Value-T[kvp.Key] : 0;
            }else{
                count+=kvp.Value;
            }
        }
        
        return count;
    }
}