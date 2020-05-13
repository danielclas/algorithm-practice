public class Solution {
    public int LengthOfLastWord(string s) {
        
        string[] arr = s.Split(' ');
        int ind = arr.Length-1;
        int ret = arr[ind].Length;
        
        while(arr[ind]=="" && ind>0){
            ind--;
            ret=arr[ind].Length;
        }        
        
        return ret;
    }
}