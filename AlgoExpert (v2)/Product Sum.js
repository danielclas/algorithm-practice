
function productSum(array, depth = 1) {
	
	let sum = 0;
	
	for(let el of array){
	 if(Array.isArray(el)){
	 	sum += productSum(el, depth + 1);
	 }else sum += el;
	}
	
	return sum * depth;
}

// Do not edit the line below.
exports.productSum = productSum;
