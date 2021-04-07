function minNumberOfCoinsForChange(n, denoms) {
  
	let arr = new Array(n + 1).fill(Infinity);
	arr[0] = 0;
	
	for(let d of denoms){
		for(let a = 0 ; a < arr.length ; a++){
			if(d <= a){
				arr[a] = Math.min(arr[a], 1 + arr[a - d]);
			}
		}
	}
	
	return arr[n] !== Infinity ? arr[n] : -1;		
}

// Do not edit the line below.
exports.minNumberOfCoinsForChange = minNumberOfCoinsForChange;
