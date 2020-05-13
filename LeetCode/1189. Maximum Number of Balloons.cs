public class Solution {
    public int MaxNumberOfBalloons(string text) {
        
        int count = 0;
        Dictionary<char,int> chars = new Dictionary<char,int>();
        string b = "balloon";
        
        foreach(char c in text){
            if(chars.ContainsKey(c)){
                chars[c]++;
            }else{
                chars.Add(c,1);
            }
        }
        
        for(int i=0 ; i<=b.Length ; i++){
            if(i==b.Length){
                i=-1;
                count++;
                continue;
            }
            
            if(chars.ContainsKey(b[i]) && chars[b[i]]>=1){
                chars[b[i]]--;
            }else{
                break;
            }                      
        }                         
        
        return count;
    }
}