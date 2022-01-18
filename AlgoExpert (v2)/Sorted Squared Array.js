function sortedSquaredArray(array) {
	let output = [];
	let posIndex = array.findIndex(n => n >= 0);
	
	if(posIndex != 0){
		let negIndex = posIndex - 1;
		
		const pos = array.slice(posIndex);
		const neg = array.slice(0, posIndex);
		
		while(pos.length > 0 || neg.length > 0){
			if(pos.length === 0) output.push(Math.pow(neg.pop(), 2));
			else if(neg.length === 0) output.push(Math.pow(pos.shift(), 2));
			else{
				if(Math.pow(pos[0], 2) < Math.pow(neg[neg.length - 1], 2)){
					output.push(Math.pow(pos.shift(), 2));
				}else{
					output.push(Math.pow(neg.pop(), 2));
				}
			}
		}
		
	}else output = array.map(n => n * n);

	return output;
}

// Do not edit the line below.
exports.sortedSquaredArray = sortedSquaredArray;
