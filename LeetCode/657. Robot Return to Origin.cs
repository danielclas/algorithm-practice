public class Solution {
    public bool JudgeCircle(string moves) {
        
        int[] arr = new int[]{0,0};
        Dictionary<char,int> m = new Dictionary<char,int>(){
            {'U',1},
            {'D',-1},
            {'L',-1},
            {'R',1}
        };
        
        foreach(char c in moves){
            if(c=='U' || c=='D'){
                arr[1]+=m[c];
            }else{
                arr[0]+=m[c];
            }
        }
        
        return arr[0]==0 && arr[1]==0;            
    }
}