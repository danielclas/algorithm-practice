public class Solution {
    public int[][] FlipAndInvertImage(int[][] A) {
        
        int[][] temp = new int[A.Length][];
        int[][] answer = new int[A.Length][];
        
        for(int i=0 ; i<A.Length ; i++){
            temp[i] = new int[A[0].Length];
            for(int j=A[i].Length-1, k=0 ; j>=0 ; j--, k++){
                temp[i][k]=A[i][j] == 1 ? 0 : 1;
            }
        }
        
        for(int i=temp.Length-1; i>=0 ; i--){
            answer[i]=temp[i];
        }
        
        return answer;
    }
}