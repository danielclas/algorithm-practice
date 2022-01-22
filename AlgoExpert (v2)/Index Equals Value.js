function indexEqualsValue(array) {
  
	for(let i = 0 ; i < array.length ; i++){
		const num = array[i];
		if(num >= 0 && num === i) return i;
	}
	
	return -1;
}

// Do not edit the line below.
exports.indexEqualsValue = indexEqualsValue;
