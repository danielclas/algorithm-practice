// Tip: You can use the Array.isArray function to check whether an item
// is a list or an integer.
function productSum(array, depth = 1) {
  
	let sum = 0;

	for(let el of array){
		if(Array.isArray(el)){
			sum += productSum(el, depth + 1);
		}else{
			sum += el;
		}
	}

	return sum  * depth;
}

// Do not edit the line below.
exports.productSum = productSum;
