function tandemBicycle(red, blue, fastest) {
  
	red = red.sort((a,b) => a - b);
	
	if(fastest) blue = blue.sort((a,b) => b - a);
	else blue = blue.sort((a,b) => a - b);
	
	let sum = 0;
	
	for(let i = 0 ; i < red.length ; i++){
		sum += Math.max(red[i], blue[i]);
	}
	
  return sum;
}

// Do not edit the line below.
exports.tandemBicycle = tandemBicycle;
