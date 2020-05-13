public class Solution {
    public bool CanConstruct(string ransomNote, string magazine) {
        
        Dictionary<char,int> ran = new Dictionary<char,int>();
        Dictionary<char,int> mag = new Dictionary<char,int>();
        
        foreach(char c in ransomNote){
            if(ran.ContainsKey(c)){
                ran[c]++;
            }else{
                ran.Add(c,1);
            }
        }
        
        foreach(char c in magazine){
            if(mag.ContainsKey(c)){
                mag[c]++;
            }else{
                mag.Add(c,1);
            }
        }
        
        foreach(KeyValuePair<char,int> kvp in ran){
            if(!mag.ContainsKey(kvp.Key)){
                return false;
            }else{
                if(mag.ContainsKey(kvp.Key) && mag[kvp.Key] < kvp.Value){
                    return false;
                }
            }
        }
        
        return true;
    }
}