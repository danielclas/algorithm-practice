public class Solution {
    public IList<string> CommonChars(string[] A) {
        
        var maps = new List<Dictionary<char,int>>();
        var answer = new List<string>();
        int occurs;
        bool contained;
        
        foreach(string s in A){
            var table = new Dictionary<char,int>();
            foreach(char c in s){
                if(table.ContainsKey(c)){
                    table[c]++;
                }else{
                    table.Add(c,1);
                }
            }
            maps.Add(table);
        }
        
        for(char c = 'a' ; c<='z' ; c++){
            occurs = Int32.MaxValue;
            contained = true;
            foreach(var map in maps){
                if(map.ContainsKey(c)){
                    if(map[c]<occurs){
                        occurs = map[c];
                    }
                }else{
                    contained = false;
                    break;
                }
            }
            
            if(contained){
                for(int i=0 ; i<occurs ; i++){
                    answer.Add($"{c}");
                }
            }
        }
        
        return answer;
        
    }
}