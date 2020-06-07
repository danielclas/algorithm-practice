public class Solution {
    
    public bool IsValidSudoku(char[][] board) {
        
        var rows = new Dictionary<int,List<char>>();
        var cols = new Dictionary<int,List<char>>();
        var grids = new Dictionary<string,List<char>>();
        
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
                    
                    var grid = $"{(int)row/3}-{(int)col/3}";
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
}