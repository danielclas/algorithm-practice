public class Solution {
    public string ReverseVowels(string s) {
        
        var lower = 0;
        var upper = s.Length-1;
        var st = new StringBuilder(s);
        char temp;
        
        while(lower<upper){
            if(IsVowel(st[lower])){
                if(IsVowel(st[upper])){
                    temp = st[upper];
                    st[upper] = st[lower];
                    st[lower] = temp;                    
                    lower++;
                }                    
                upper--;
            }else if(IsVowel(st[upper])){
                if(IsVowel(st[lower])){
                    temp = st[upper];
                    st[upper] = st[lower];
                    st[lower] = temp;                    
                    upper--;
                } 
                lower++;
            }else{
                upper--;
                lower++;
            }
        }
        
        return st.ToString();
    }
    
    public static bool IsVowel(char c){
        
        return "AaEeIiOoUu".IndexOf(c)>=0;
    }
}