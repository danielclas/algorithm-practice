public class Solution {
    public int MaxIncreaseKeepingSkyline(int[][] grid) {

        var rowsMax = new int[grid.Length];
        var colsMax = new int[grid[0].Length];
        var acum = 0;
        
        for(int i=0 ; i<grid.Length ; i++){
            for(int j=0 ; j<grid[i].Length ; j++){
                var n = grid[i][j];
                
                if(n>rowsMax[i])
                    rowsMax[i]=n;                
                if(n>colsMax[j])
                    colsMax[j]=n;                
            }
        }
        
        for(int i=0 ; i<grid.Length ; i++){
            for(int j=0 ; j<grid[i].Length ; j++){
                var n = rowsMax[i]>colsMax[j] ? colsMax[j] : rowsMax[i];                     if(n!=grid[i][j])
                    acum+=n-grid[i][j];
            }
        }    
        
        return acum;
    }
}