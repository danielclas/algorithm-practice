public class Solution {
    public IList<string> SubdomainVisits(string[] cpdomains) {
        
        IList<string> answer = new List<string>();
        var map = new Dictionary<string,int>();
        
        foreach(var entry in cpdomains){
            var arr = entry.Split(' ');
            var n = int.Parse(arr[0]);
            
            for(int i=arr[1].Length-1 ; i>=0 ; i--){
                if(i==0 || arr[1][i-1]=='.'){
                    var temp = arr[1].Substring(i);
                    if(map.ContainsKey(temp)){
                        map[temp]+=n;
                    }else{
                        map.Add(temp,n);
                    }
                }
            }               
        }       
        
        foreach(var kvp in map){
            answer.Add($"{kvp.Value} {kvp.Key}");
        }
        
        return answer;        
    }
}