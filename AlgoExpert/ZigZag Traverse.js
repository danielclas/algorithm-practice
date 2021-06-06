function zigzagTraverse(array) {
	let result = [];
	
	if(array.length == 1) return array[0];
		
	result.push(array[0][0], array[1][0]);
	
	let coords = [1, 0];
	let up, down;
	
	do{
		up = moveUp(coords, result, array);
		down = moveDown(coords, result, array);
	}while(up + down != 0);	
	
	return result;
}

function moveDown(coords, result, array){
	let row = coords[0], col = coords[1];
	let added = 0;
	
	while(row + 1 < array.length && col - 1 >= 0){
        row++;
        col--;
        result.push(array[row][col]);
        added++;
	}
	
	if(row + 1 < array.length){
		row++;
		result.push(array[row][col]);	
		added++;
	}else if(col + 1 < array[row].length){
		col++;
		result.push(array[row][col]);
		added++;
	}
	
	coords[0] = row;
	coords[1] = col;
	
	return added;
}

function moveUp(coords, result, array){
	let row = coords[0], col = coords[1];	
	let added = 0;
	
	while(row - 1 >= 0 && col + 1 < array[row - 1].length){		
        row--;
        col++;
        result.push(array[row][col]);
        added++;
	}
	
	if(col + 1 < array[row].length){
		col++;
		result.push(array[row][col]);
		added++;
	}else if(row + 1 < array.length){
		row++;
		result.push(array[row][col]);
		added++;
	}
	
	coords[0] = row;
	coords[1] = col;	
	
	return added;
}
