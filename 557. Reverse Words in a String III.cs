public class Solution {
    public string ReverseWords(string s) {
        
        var answer = new StringBuilder();
        
        foreach(string r in s.Split(' '))
            answer.Append(ReverseString(r)+' ');
        
        return answer.ToString().TrimEnd();
    }
    
    public string ReverseString(string s){
        
        var r = new StringBuilder();
        
        for(int i=s.Length-1 ; i>=0 ; i--)
            r.Append(s[i]);
        
        return r.ToString();
    }
}