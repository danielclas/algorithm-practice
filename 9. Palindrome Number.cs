public class Solution {
    public bool IsPalindrome(int x) {
        
        if(x<0){
            return false;
        }else{
            string n = x.ToString();
            for(int i=0, j=n.Length-1 ; i<n.Length/2 ; i++, j--){
                if(n[i]!=n[j]){
                    return false;
                }
            }
        }
        
        return true;
    }
}