public class Solution {
    public bool IsPalindrome(string s) {
        
        StringBuilder str = new StringBuilder();
        string lower;
            
        for(int i=0 ; i<s.Length ; i++){
            if(Char.IsLetterOrDigit(s[i])){
                str.Append(s[i]);
            }
        }
        
        lower = str.ToString().ToLower();
        for(int i=0, j=lower.Length-1 ; i<lower.Length/2 ; i++,j--){
            if(lower[i]!=lower[j]){
                return false;
            }
        }
        
        return true;
    }
}