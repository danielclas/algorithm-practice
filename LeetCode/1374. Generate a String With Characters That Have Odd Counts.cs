public class Solution {
    public string GenerateTheString(int n) {
        
        StringBuilder sb = new StringBuilder();
        string s = "xyz";
        
        if(n==1){
            return "y";
        }
        
        if(n%2==1){
            for(int i=0 ; i<n-2 ; i++){
                sb.Append(s[0]);
            }                
            sb.Append(s[1]);
            sb.Append(s[2]);
        }else{
            for(int i=0 ; i<n-1 ; i++){
                sb.Append(s[0]);
            }            
            sb.Append(s[1]);
        }
        
        return sb.ToString();
    }
}