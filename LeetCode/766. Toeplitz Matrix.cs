    public bool IsToeplitzMatrix(int[][] matrix) {
        
        for(int i=1 ; i<matrix.Length ; i++){
            for(int j=0 ; j<matrix[i].Length ; j++){
                if(j-1>=0){
                    if(matrix[i-1][j-1]!=matrix[i][j]){
                        return false;
                    }
                }
            }
        }
        
        return true;
    }
}