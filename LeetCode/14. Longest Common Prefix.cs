public class Solution {
    public string LongestCommonPrefix(string[] strs) {
        
        var answer = new StringBuilder();
        
        if(strs.Length == 0) return "";
        
        for(int i=0 ; i<strs[0].Length ; i++){
            char c = ' ';
            bool b = true;
            foreach(string s in strs){
                if(c == ' ') c = s[i];
                else if(i>=s.Length || c != s[i]){
                    b = false;
                    break;
                }
            }
            if(b) answer.Append(strs[0][i]);
            else break;
        }
        
        return answer.ToString();    
    }
}