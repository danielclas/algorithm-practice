public class Solution {
    public string ReverseWords(string s) {
        
        var arr = s.Split(' ', StringSplitOptions.RemoveEmptyEntries);
        var ans = new StringBuilder();
        
        for(int i=arr.Length-1 ; i>=0 ; i--){
                ans.Append(arr[i]+" ");            
        }
        
        return ans.ToString().TrimEnd();
    }
}