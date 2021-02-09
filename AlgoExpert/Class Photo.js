function classPhotos(red, blue) {
  
	red.sort((a,b) => a - b);
	blue.sort((a,b) => a - b);
	
	let arr = [];
	
	for(let i = 0 ; i < red.length ; i++){
		arr.push(red[i] - blue[i]);	
	}
	
	if(arr.some(n => n == 0)) return false;
	
	let checkForNegative = arr[0] < 0;
	
	for(let n of arr){
		if((n > 0 && checkForNegative) || (n < 0 && !checkForNegative))
			return false;
	}
	
	return true;	
}

// Do not edit the line below.
exports.classPhotos = classPhotos;