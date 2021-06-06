function multiStringSearch(bigString, smallStrings) {	
	return smallStrings.map(s => includes(bigString, s));
}

function includes(big, small){
	for(let i = 0 ; i + small.length - 1 < big.length ; i++){
		if(compare(big, i, small)) return true;
	}
	
	return false;
}

function compare(big, bigLeftIndex, small){
	let smallLeftIndex = 0, smallRightIndex = small.length - 1;
	let bigRightIndex = bigLeftIndex + smallRightIndex;
	
	while(bigRightIndex > bigLeftIndex){
		if(big[bigLeftIndex] != small[smallLeftIndex]) return false;
		if(big[bigRightIndex] != small[smallRightIndex]) return false;
		
		smallLeftIndex++;
		bigLeftIndex++;
		
		smallRightIndex--;
		bigRightIndex--;
	}
	
	return true;
}