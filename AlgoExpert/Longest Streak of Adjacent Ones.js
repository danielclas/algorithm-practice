function longestStreakOfAdjacentOnes(array) {
	let index = 0;
	let max = -Infinity;
	let indices = [];
	
	for(let i = 0 ; i < array.length ; i++)
		if(array[i] == 0) indices.push(i);
	
	if(indices.length == 0) return -1;
	
	for(let i of indices){
		let len = 1;
		let left = i, right = i;
		
		while(left - 1 >= 0 && array[left - 1] != 0){
			len++;
			left--;
		}
		
		while(right + 1 < array.length && array[right + 1] != 0){
			len++;
			right++;
		}
		
		if(len > max){
			max = len;
			index = i;
		}
	}
	
	return index;
}
