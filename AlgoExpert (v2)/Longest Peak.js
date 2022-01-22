function longestPeak(array) {
  
	let longestPeak = 0;
	
	for(let i = 1 ; i < array.length - 1 ; i++){
		const isPeak = array[i - 1] < array[i] && array[i] > array[i + 1];
		if(isPeak){
			const peakLength = getPeakLength(array, i);
			longestPeak = peakLength > longestPeak ? peakLength : longestPeak;
		}
	}
	
	return longestPeak;
}

function getPeakLength(array, peakIndex) {
	
	let left = peakIndex - 1, right = peakIndex + 1;
	let len = 1;
	
	while(left >= 0 || right < array.length){
		if(left >= 0 && array[left] < array[left + 1])
			len++;
		else left = -1;
		
		if(right < array.length && array[right - 1] > array[right])
			len++;
		else right = array.length;
		
		right++;
		left--;
	}
	
	return len;
}


// Do not edit the line below.
exports.longestPeak = longestPeak;
