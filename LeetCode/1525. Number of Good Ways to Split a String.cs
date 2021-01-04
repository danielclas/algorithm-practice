public class Solution {
    public int NumSplits(string s) {
        
        var count = 0;
        var left = new Dictionary<char,int>();
        var right = new Dictionary<char,int>();
        
        left.Add(s[0], 1);
        
        foreach(char c in s.Substring(1)){
            if(right.ContainsKey(c)) right[c]++;
            else right.Add(c,1);
        }
        
        if(left.Keys.Count == right.Keys.Count){
            count++;
        }
        
        for(int i=1 ; i<s.Length-1 ; i++){
            if(left.Keys.Count == right.Keys.Count){
                count++;
            }
            
            var c = s[i];
            if(left.ContainsKey(c)) left[c]++;
            else left.Add(c,1);
            
            right[c]--;
            if(right[c]==0) right.Remove(c);
        }
        
        return count;
    }
}