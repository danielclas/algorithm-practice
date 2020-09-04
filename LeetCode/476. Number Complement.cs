public class Solution {
    public int FindComplement(int num) {
        
        var bin = Convert.ToString(num, 2);
        var temp = new StringBuilder();
        
        foreach(char c in bin.ToCharArray()){
            char n = c == '1' ? '0' : '1';
            temp.Append(n);
        }
        
        return Convert.ToInt32(temp.ToString(), 2);
    }
}