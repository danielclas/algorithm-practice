public class Solution {
    public string RestoreString(string s, int[] indices) {
        
        var arr = new char[s.Length];
        
        for(int i=0 ; i<s.Length ; i++){
            int pos = indices[i];
            arr[pos] = s[i];
        }
        
        return new string(arr);
    }
}