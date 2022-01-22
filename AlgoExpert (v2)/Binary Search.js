function binarySearch(array, target) {
	let left = 0, right = array.length - 1;
	
	while(left <= right){
		let middle = Math.floor((right + left) / 2);
		if(array[middle] === target) return middle;
		else if(target < array[middle]) right = middle - 1;
		else left = middle + 1;
	}
	
	return -1;
}

// Do not edit the line below.
exports.binarySearch = binarySearch;
