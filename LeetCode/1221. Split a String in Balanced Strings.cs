public class Solution {
    public int BalancedStringSplit(string s) {
        
        var count = 0;
        var dict = new Dictionary<char,int>(){
            {'R',0},
            {'L',0}
        };
        
        foreach(char c in s){
            if(c == 'R') dict[c]++;
            else dict['L']++;
            
            if(dict['L']==dict['R']){
                count++;
                dict['L']=0;
                dict['R']=0;
            }
        }
        
        return count;
    }
}