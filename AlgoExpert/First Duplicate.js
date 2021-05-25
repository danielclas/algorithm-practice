function firstDuplicateValue(array) {	
	for(let i = 0 ; i < array.length ; i++){
		let index = Math.abs(array[i]) - 1;
		
		if(array[index] < 0) return index + 1;

		array[index] = array[index] * -1;
	}

	return -1;
}

// Do not edit the line below.
exports.firstDuplicateValue = firstDuplicateValue;
