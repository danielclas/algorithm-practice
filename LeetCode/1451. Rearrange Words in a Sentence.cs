public class Solution {
    public string ArrangeWords(string text) {
        
        var map = new SortedDictionary<int,List<string>>();
        var answer = new StringBuilder();
        
        foreach(var s in text.Split(' ')){
            if(map.ContainsKey(s.Length)){
                map[s.Length].Add(s.ToLower());
            }else{
                map.Add(s.Length,new List<string>(){s.ToLower()});
            }
        }
        
        
        foreach(var m in map){
            foreach(var s in m.Value){
                if(answer.Length==0){
                    answer.Append(char.ToUpper(s[0]) + s.Substring(1) + ' ');
                }else{
                    answer.Append(s + ' ');
                }
            }
        }
        
        return answer.ToString().TrimEnd();
        
    }
}