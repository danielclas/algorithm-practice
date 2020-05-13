public class Solution {
    public IList<int> LuckyNumbers (int[][] matrix) {
        
        IList<int> answer = new List<int>();
        int min;
        int col;
        bool add;
        
        for(int i=0 ; i<matrix.Length ; i++){
            min  = Int32.MaxValue;
            col = -1;
            add = true;
            for(int j=0 ; j<matrix[i].Length ; j++){
                if(matrix[i][j]<min){
                    min = matrix[i][j];
                    col = j;
                }
            }
            
            for(int k = 0 ; k<matrix.Length ; k++){
                if(matrix[k][col]>min){
                    add = false;
                    break;
                }
            }
            
            if(add){
                answer.Add(min);
            }            
        }
        
        return answer;
    }
}