public class Solution {
    public string[] UncommonFromSentences(string A, string B) {
        
        Dictionary<string,int> a = new Dictionary<string,int>();
        Dictionary<string,int> b = new Dictionary<string,int>();
        List<string> list = new List<string>();
        
        foreach(string s in A.Split(' ')){
            if(a.ContainsKey(s)){
                a[s]++;
            }else{
                a.Add(s,1);
            }
        }
        
        foreach(string s in B.Split(' ')){
            if(b.ContainsKey(s)){
                b[s]++;
            }else{
                b.Add(s,1);
            }
        }
        
        foreach(KeyValuePair<string,int> k in a){
            if(k.Value==1 && !b.ContainsKey(k.Key)){
                list.Add(k.Key);
            }
        }        
        
        foreach(KeyValuePair<string,int> k in b){
            if(k.Value==1 && !a.ContainsKey(k.Key)){
                list.Add(k.Key);
            }
        }
        
        return list.ToArray();
    }
}