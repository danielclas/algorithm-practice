public class Solution {
    public int CountCharacters(string[] words, string chars) {
        
        Dictionary<char,int> c = new Dictionary<char,int>();
        Dictionary<char,int> dict;
        bool b = true;
        int count = 0;
        
        foreach(char s in chars){
            if(c.ContainsKey(s)){
                c[s]++;
            }else{
                c.Add(s,1);
            }
        }
        
        foreach(string s in words){
            dict = WordsToDic(s);
            foreach(KeyValuePair<char,int> k in dict){
                if(!c.ContainsKey(k.Key) || c[k.Key] < k.Value){
                    b = false;
                }
            }
            if(b){
                count+=s.Length;
            }
            b=true;
        }
        
        return count;
    }
    
    public Dictionary<char,int> WordsToDic(string s){
        
        Dictionary<char,int> dict = new Dictionary<char,int>();
        
        foreach(char c in s){
            if(dict.ContainsKey(c)){
                dict[c]++;
            }else{
                dict.Add(c,1);
            }
        }
        
        return dict;
    }
}