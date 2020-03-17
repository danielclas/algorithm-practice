public class Solution {
    public string[] FindWords(string[] words) {
        
        var list = new List<string>();
        var rows = new Dictionary<int,char[]>();
        
        rows.Add(0,"QWERTYUIOPqwertyuiop".ToCharArray());
        rows.Add(1,"ASDFGHJKLasdfghjkl".ToCharArray());
        rows.Add(2,"ZXCVBNMzxcvbnm".ToCharArray());
        
        foreach(string word in words){
            foreach(var row in rows.Values.ToList()){
                if(Array.IndexOf(row,word[0])!=-1){
                    bool contains = true;
                    
                    foreach(char c in word){
                        if(Array.IndexOf(row,c)==-1){
                            contains = false;
                        }
                    }
                    
                    if(contains){
                        list.Add(word);
                    }
                }
            }
        }
        
        return list.ToArray();      
    }
}