public class Solution {
    public IList<int> FindAnagrams(string s, string p) {
        
        var arr = new int[26];
        IList<int> answer = new List<int>();
        
        if(p.Length>s.Length) return answer;
        
        foreach(char c in p)
            arr[c-97]++;
        
        for(int i=0 ; i<=s.Length-p.Length ; i++){
            var temp = new int[26];
            var equals = true;
            
            for(int j=i ; j<i+p.Length ; j++){
                var index = s[j]-97;
                temp[index]++;
                if(temp[index]>arr[index]){
                    equals = false;
                    break;
                }
            }
            
            if(equals) answer.Add(i);
        }
        
        return answer;
        
        
    }
}