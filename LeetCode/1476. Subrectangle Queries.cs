public class SubrectangleQueries {

    int[][] rectangle;
    
    public SubrectangleQueries(int[][] rectangle) {
        this.rectangle = rectangle;    
    }
    
    public void UpdateSubrectangle(int row1, int col1, int row2, int col2, int newValue) {
        
        for(int i=row1 ; i<=row2 ; i++){
            for(int j=col1 ; j<=col2 ; j++){
                rectangle[i][j] = newValue;
            }
        }
    }
    
    public int GetValue(int row, int col) {
        if(row<rectangle.Length && col<rectangle[0].Length){
            return rectangle[row][col];
        }
        
        return -1;
    }
}

/**
 * Your SubrectangleQueries object will be instantiated and called as such:
 * SubrectangleQueries obj = new SubrectangleQueries(rectangle);
 * obj.UpdateSubrectangle(row1,col1,row2,col2,newValue);
 * int param_2 = obj.GetValue(row,col);
 */