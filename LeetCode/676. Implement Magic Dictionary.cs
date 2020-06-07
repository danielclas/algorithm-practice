public class MagicDictionary {
    
    private HashSet<string> words;
    /** Initialize your data structure here. */
    public MagicDictionary() {
        words = new HashSet<string>();
    }
    
    /** Build a dictionary through a list of words */
    public void BuildDict(string[] dict) {
        
        foreach(var s in dict)
            words.Add(s);
    }
    
    /** Returns if there is any word in the trie that equals to the given word after modifying exactly one character */
    public bool Search(string word) {
        
        foreach(string s in words){
            if(CheckWord(s,word)) return true;
        }
        
        return false;        
    }
    
    public bool CheckWord(string s, string word){
        
        bool err = false;
        
        if(word.Length != s.Length || s==word) return false;
        else{
            for(int i = 0 ; i<s.Length ; i++){
                if(s[i]!=word[i]){
                    if(err) return false;
                    else err = true;
                }
            }
        }
        
        return true;
    }
}

/**
 * Your MagicDictionary object will be instantiated and called as such:
 * MagicDictionary obj = new MagicDictionary();
 * obj.BuildDict(dict);
 * bool param_2 = obj.Search(word);
 */