public class Solution {
    public IList<string> PrintVertically(string s) {
        
        var words = s.Split(' ');
        var max = Int32.MinValue;
        IList<string> list = new List<string>();
        
        foreach(var w in words) if(w.Length>max) max = w.Length;
        
        for(int i=0 ; i<max ; i++){
            var str = new StringBuilder();
            foreach(var w in words){
                char c = i<w.Length ? w[i] : ' ';
                str.Append(c);
            }
            list.Add(str.ToString().TrimEnd());
        }
        
        return list;
    }
}