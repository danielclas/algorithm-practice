    public int OddCells(int n, int m, int[][] indices) {
        
        var matrix = new int[n][];
        var count = 0;
        
        for(int i=0 ; i<n ; i++){
            matrix[i] = new int[m];
        }
        
        foreach(var index in indices){
            var r = index[0];
            var c = index[1];
            
            for(int i=0 ; i<m ; i++)
                matrix[r][i]++;
            
            for(int i=0 ; i<n ; i++){
                matrix[i][c]++;
            }
        }
        
        foreach(var row in matrix){
            foreach(var col in row){
                if(col % 2 == 1){
                    count++;
                }
            }
        }
        
        return count;
    }