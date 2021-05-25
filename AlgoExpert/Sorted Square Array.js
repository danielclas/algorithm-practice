function sortedSquaredArray(array) {
	
	const arr = new Array(array.length).fill(0);
	let smallerIndex = 0, greaterIndex = array.length - 1;
	
	for(let i = array.length - 1 ; i >= 0 ; i--){
		let smallerValue = array[smallerIndex];
		let greaterValue = array[greaterIndex];
		
		if(Math.abs(smallerValue) > Math.abs(greaterValue)){
			arr[i] = smallerValue * smallerValue;
			smallerIndex++;
		}else{
			arr[i] = greaterValue * greaterValue;
			greaterIndex--;
		}
	}
	
	return arr;
}
