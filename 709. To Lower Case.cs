public class Solution {
    public string ToLowerCase(string str) {
        
        StringBuilder s = new StringBuilder();
        
        foreach(char c in str){
            if(c >= 65 && c<=90){
                s.Append((char)(c+32));
            }else{
                s.Append(c);
            }
        }
        
        return s.ToString();
    }
}