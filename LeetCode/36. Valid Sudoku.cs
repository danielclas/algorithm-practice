public class Solution {
    
    static char[][] b;
    
    public bool IsValidSudoku(char[][] board) {
        
        b = board;       
        var rows = new Dictionary<int,List<char>>();
        var cols = new Dictionary<int,List<char>>();
        var grids = new Dictionary<int,List<char>>();
        
        for(int row = 0 ; row<9 ; row++){
            for(int col = 0 ; col<9 ; col++){
                var c = board[row][col];
                if(c != '.'){
                    if(rows.ContainsKey(row)){
                        if(rows[row].Contains(c)) return false;
                        else rows[row].Add(c);                        
                    }else{
                        rows.Add(row,new List<char>(){c});
                    }                    
                    
                    if(cols.ContainsKey(col)){
                        if(cols[col].Contains(c)) return false;
                        else cols[col].Add(c);                        
                    }else{
                        cols.Add(col,new List<char>(){c});
                    }
                
                    var grid = GridNumber(row,col);
                    if(grids.ContainsKey(grid)){
                        if(grids[grid].Contains(c)) return false;
                        else grids[grid].Add(c);
                    }else{
                        grids.Add(grid,new List<char>(){c});
                    }
                }
            }
        }        
        
        return true;
    }
    
    public static int GridNumber(int row, int col){
       
        var grid = 0;
        
        switch(row){
            case 0:
            case 1:
            case 2:
                if(col<=2) grid = 0;
                else if(col<=5) grid = 1;
                else grid = 2;
                break;
            case 3:
            case 4:
            case 5:
                if(col<=2) grid = 3;
                else if(col<=5) grid = 4;
                else grid = 5;
                break;
            case 6:
            case 7:
            case 8:
                if(col<=2) grid = 6;
                else if(col<=5) grid = 7;
                else grid = 8;
                break;
        }
        
        return grid;     
    }
}