public class Solution {
    public char FindTheDifference(string s, string t) {
        
        Dictionary<char,int> sDict = new Dictionary<char,int>();
        Dictionary<char,int> tDict = new Dictionary<char,int>();
        
        foreach(char c in s){
            if(sDict.ContainsKey(c)){
                sDict[c]++;
            }else{
                sDict.Add(c,1);
            }
        }
        
        foreach(char c in t){
            if(tDict.ContainsKey(c)){
                tDict[c]++;
            }else{
                tDict.Add(c,1);
            }
        }
        
        foreach(KeyValuePair<char,int> k in tDict){
            if(sDict.ContainsKey(k.Key)){
                if(k.Value != sDict[k.Key]){
                    return k.Key;
                }
            }else{
                return k.Key;
            }
        }
        
        return ' ';
    }
}