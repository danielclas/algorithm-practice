public class Solution {
    public string FreqAlphabets(string s) {
        
        var answer = new StringBuilder();
        
        for(int i=0 ; i<s.Length ; i++){
            var n = 0;
            if(i+2<s.Length && s[i+2]=='#'){
                n = int.Parse($"{s[i]}{s[i+1]}");
                i++;
            }else if(s[i]!='#')
                n = int.Parse($"{s[i]}");            
            
            if(n!=0)
                answer.Append((char)(n+96));
        }
        
        return answer.ToString();
    }
}