public class Solution {
    public int FirstUniqChar(string s) {
        
        var table = new Dictionary<char,int>();
        
        foreach(char c in s){
            if(table.ContainsKey(c)){
                table[c]++;
            }else{
                table.Add(c,1);
            }
        }
        
        for(int i=0 ; i<s.Length ; i++){
            if(table[s[i]]==1){
                return i;
            }
        }
        
        return -1;
    }
}