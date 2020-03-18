public class Solution {
    public IList<string> FindAndReplacePattern(string[] words, string pattern) {
        
        string p = MakePattern(pattern);
        IList<string> list = new List<string>();
        
        foreach(string word in words){
            if(MakePattern(word)==p){
                list.Add(word);
            }
        }
               
        return list;        
    }
    
    public string MakePattern(string s){

        var table = new Dictionary<char,int>();
        string p = "";
        int n=1;
        
        foreach(char c in s){
            if(!table.ContainsKey(c)){
                table.Add(c,n);
                n++;
            }
            p+=$"{table[c]}";
        }      
        
        return p;
    }
}