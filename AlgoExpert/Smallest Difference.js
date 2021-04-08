function smallestDifference(one, two) {
	one.sort((a,b) => a - b);
	two.sort((a,b) => a - b);
	
	let arr = [];
	let i = 0, j = 0;
	let min = Number.MAX_VALUE, current = Number.MAX_VALUE;
	
	while(i < one.length && j < two.length){
		let first = one[i];
		let second = two[j];
		
		if(first < second){
			current = Math.abs(first - second);
			i++;
		}else if(first > second){
			current = Math.abs(first - second);
			j++;
		}else return [first, second];
		
		if(current < min){
			min = current;
			arr = [first, second];
		}
		
	}
	
	return arr;
}
