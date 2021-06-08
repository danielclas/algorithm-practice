function riverSizes(matrix) {
    let sizes = [];
    
    for(let row = 0 ; row < matrix.length ; row++){
        for(let col = 0 ; col < matrix[row].length ; col++){
            if(matrix[row][col] == 1){
                sizes.push(0);
                traverse(matrix, row, col, sizes);
            }
        }
    }
    
    return sizes;
}
  
function traverse(matrix, row, col, sizes){
    if(matrix[row][col] == 1){
        sizes[sizes.length - 1]++;
        matrix[row][col] = 0;
    }else return;
    
    if(row - 1 >= 0) traverse(matrix, row - 1, col, sizes);
    if(row + 1 < matrix.length) traverse(matrix, row + 1, col, sizes);
    if(col - 1 >= 0) traverse(matrix, row, col - 1, sizes);
    if(col + 1 < matrix[row].length) traverse(matrix, row, col + 1, sizes);
}
  