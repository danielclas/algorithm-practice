public class Solution {
    public int LengthOfLongestSubstring(string s) {
     
        var max = -1;
     
        if(s.Length == 0 || s.Length == 1) return s.Length;
        
        for(int i=0 ; i<s.Length-1 ; i++){
            var chars = new HashSet<char>(){s[i]};
            for(int j=i+1 ; j<s.Length ; j++){
                if(!chars.Add(s[j])) break;
            }
            if(chars.Count>max) max = chars.Count;
        }
        
        return max;
    }
}