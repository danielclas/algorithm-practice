public class Solution {
    public int DiagonalSum(int[][] mat) {
        
        int sum = 0;
        
        for(int i=0 ; i<mat.Length ; i++){
            sum+=mat[i][i];
        }
        
        for(int i=0, j=mat[i].Length-1 ; i<mat.Length ; i++, j--){
            if(i != j) sum+=mat[i][j];
        }
        
        return sum;
    }
}