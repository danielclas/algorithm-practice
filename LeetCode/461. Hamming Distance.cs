public class Solution {
    public int HammingDistance(int x, int y) {
        
        string X = Convert.ToString(x, 2);
        string Y = Convert.ToString(y, 2);
        
        return X.Length>Y.Length ? CuontDiffs(X,Y) : CuontDiffs(Y,X); 
    }
    
    public static int CuontDiffs(string l, string s){
        
        int count = 0;
        
        for(int i=l.Length-1, j=s.Length-1 ; i>=0 ; i--, j--){
            if(j<0 && l[i]=='1') count++;
            else if(j>=0 && l[i]!=s[j]) count++;
        }
        
        return count;
    }
}