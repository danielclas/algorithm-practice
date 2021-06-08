var numIslands = function(grid) {
    let count = 0;
    
    for(let row = 0 ; row < grid.length ; row++){
        for(let col = 0 ; col < grid[row].length ; col++){
            if(grid[row][col] == 1){
                traverse(grid, row, col);
                count++;
            }
        }
    }
    
    return count;
};


function traverse(grid, row, col, num){
    if(grid[row][col] == 1) grid[row][col] = 0;
    else return;
    
    if(row - 1 >= 0) traverse(grid, row - 1, col);
    if(row + 1 < grid.length) traverse(grid, row + 1, col);
    if(col - 1 >= 0) traverse(grid, row, col - 1);
    if(col + 1 < grid[row].length) traverse(grid, row, col + 1);
}