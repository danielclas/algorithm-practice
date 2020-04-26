public class Solution {
    public int CountNegatives(int[][] grid) {
        
        int count = 0;
        
        for(int row = 0 ; row<grid.Length ; row++){
            for(int column = grid[row].Length-1 ; column>=0 ; column--){
                if(grid[row][column]<0){
                    count++;
                }else{
                    break;
                }
            }
        }
        
        return count;
    }
}