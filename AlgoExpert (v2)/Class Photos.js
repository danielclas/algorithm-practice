function classPhotos(red, blue) {

	red = red.sort((a,b) => a - b);
	blue = blue.sort((a,b) => a - b);
	
	let direction = 0;
	
	for(let i = 0 ; i < red.length ; i++){
		if(red[i] === blue[i]) return false;
		if(direction === 0){
			direction = red[i] > blue[i] ? -1 : 1;
		}else{
			const temp = red[i] > blue[i] ? -1 : 1;
			if(temp != direction) return false;
		}
	}
	
	return true;
}

// Do not edit the line below.
exports.classPhotos = classPhotos;
