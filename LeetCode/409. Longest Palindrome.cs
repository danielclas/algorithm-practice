public class Solution {
    public int LongestPalindrome(string s) {
        
        var map = new Dictionary<char,int>();
        List<int> list;
        int count = 0;
        int max = 0;
        
        foreach(char c in s){
            if(map.ContainsKey(c)) map[c]++;
            else map.Add(c,1);
        }
        
        foreach(var kvp in map){
            if(kvp.Value % 2 == 1 && kvp.Value > max){
                max = kvp.Value;
            }
        }
        
        foreach(var kvp in map){
            if(kvp.Value % 2 == 0){
                count+=kvp.Value;
            }else{
                count+=kvp.Value-1;
            }
        }        
        
        return count + (max != 0 ? 1 : 0);
    }
}