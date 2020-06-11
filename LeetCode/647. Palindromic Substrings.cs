public class Solution {
    public int CountSubstrings(string s) {
        
        var count = s.Length;
        
        for(int i=0 ; i<s.Length-1 ; i++){
            for(int j=i+1 ; j<s.Length ; j++){
                if(IsPalindrome(s,i,j)) count++;
            }
        }
        
        return count;
    }
    
    public static bool IsPalindrome(string s, int from, int to){
        
        for(int i=from, j=to ; i<j ; i++, j--){
            if(s[i]!=s[j]) return false;
        }
        
        return true;        
    }
}