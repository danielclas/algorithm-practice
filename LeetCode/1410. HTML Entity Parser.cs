public class Solution {
    public string EntityParser(string text) {
        
        var answer = new StringBuilder();
        var map = new Dictionary<string,char>(){
            {"&quot;",'"'},
            {"&apos;", '\''},
            {"&amp;", '&'},
            {"&gt;", '>'},
            {"&lt;", '<'},
            {"&frasl;", '/'}
        };
        
        for(int i=0 ; i<text.Length ; i++){
            if(text[i]!='&'){
                answer.Append(text[i]);
            }else{
                var prev = i;
                var temp = new StringBuilder();
                temp.Append(text[i]);
                while(text[i]!=';'){
                    i++;
                    temp.Append(text[i]);
                }
                if(map.ContainsKey(temp.ToString())){                 
                    answer.Append(map[temp.ToString()]);   
                }else{
                    answer.Append('&');
                    i = prev;
                }                
            }
        }        
        
        return answer.ToString();
    }
}