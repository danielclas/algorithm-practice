function twoNumberSum(array, targetSum) {
	
	let obj = {};
	
	for(let num of array){
		obj[targetSum - num] = num;
	}
	
	for(let num of array){
		if(obj[num] && obj[num] != num){
			return [num, obj[num]];
		}
	}
	
	return [];	
}
