public class Solution {
    public bool IsAnagram(string s, string t) {
        
        Dictionary<char,int> S = new Dictionary<char,int>();
        Dictionary<char,int> T = new Dictionary<char,int>();
        
        foreach(char c in s){
            if(S.ContainsKey(c)){
                S[c]++;
            }else{
                S.Add(c,1);
            }
        }
        
        foreach(char c in t){
            if(T.ContainsKey(c)){
                T[c]++;
            }else{
                T.Add(c,1);
            }
        }
        
        if(S.Keys.Count == T.Keys.Count){
            foreach(KeyValuePair<char,int> k in S){
                if(!T.ContainsKey(k.Key) || T[k.Key] != k.Value){
                    return false;
                }
            }
        }else{
            return false;
        }
        
        return true;       
        
    }
}