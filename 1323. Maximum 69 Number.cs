public class Solution {
    public int Maximum69Number (int num) {
        
        StringBuilder s = new StringBuilder(num.ToString());
        int ind = num.ToString().IndexOf('6');
        
        if(ind!=-1){
            s[ind]='9';
        }
        
        return int.Parse(s.ToString());
    }
}