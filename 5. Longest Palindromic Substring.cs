
public class Solution {
    public string LongestPalindrome(string s) {
        
        string sub="", ret="";
        int len = 0;
        
        if(IsPalindrome(s)){
            return s;
        }
        
        for(int i=0 ; i+len<=s.Length ; i++){
            if(i+len==s.Length){
                i=-1;
                len++;
                continue;
            }else{
                if(s[i]==s[i+len]){
                    sub = s.Substring(i,len+1);
                    if(IsPalindrome(sub) && sub.Length > ret.Length){
                        ret = sub;
                    }
                }                             
            }
        }
        
        return ret;             
    }
    
    public bool IsPalindrome(string s){
        
        if(s.Length!=1){
            for(int i=0, j=s.Length-1 ; i<s.Length/2 ; i++,j--){
                if(s[i]!=s[j]){
                    return false;
                }   
            }    
        }                  
        
        return true;
    }
}