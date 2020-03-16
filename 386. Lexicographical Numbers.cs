public class Solution {
    public IList<int> LexicalOrder(int n) {
        
        List<string> list = new List<string>();
        IList<int> ret = new List<int>();
        
        for(int i=1 ; i<=n ; i++){
            list.Add(i.ToString());
        }
        
        list.Sort();
        
        foreach(string s in list){
            ret.Add(int.Parse(s));
        }
        
        return ret;
    }
}