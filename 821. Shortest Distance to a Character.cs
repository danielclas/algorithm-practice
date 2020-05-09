public class Solution {
    public int[] ShortestToChar(string S, char C) {
     
        var answer = new int[S.Length];
        var prev = -1;
        
        for(int i=0 ; i<S.Length  ; i++){
            if(S[i]==C){
                prev = i;
                continue;
            }
            
            int count = 0;
            while(prev==-1 || count<i-prev){
                count++;
                if(i+count<S.Length && S[i+count]==C){
                    answer[i]=count;
                    break;
                }
            }
            
            if(answer[i]==0){
                answer[i]=i-prev;
            }
        }
        
        return answer;
        
    }
}