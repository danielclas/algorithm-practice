public class Solution {
    public bool WordPattern(string pattern, string str) {
        
        int n = 0;
        var table = new Dictionary<char,int>();
        var words = new Dictionary<string,int>();
        
        string p = "", s = "";
        
        foreach(char c in pattern){
            if(!table.ContainsKey(c)){
                table.Add(c,n);
                n++;
            }
            p+=table[c];
        }
        
        n=0;
        foreach(string c in str.Split(' ')){
            if(!words.ContainsKey(c)){
                words.Add(c,n);
                n++;
            }
            s+=words[c];
        }
        
        return p==s;
        
        
    }
}