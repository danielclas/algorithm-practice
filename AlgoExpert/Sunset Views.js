function sunsetViews(buildings, direction) {
	let stack = [];
	let isWest = direction == 'WEST';
	let i = isWest ? 0 : buildings.length - 1;
	let eval = () => isWest ? i < buildings.length : i >= 0;

	while(eval()){
		compare(stack, buildings, i);
		i += isWest ? 1 : -1;
	}

	if(!isWest) stack.reverse();

	return stack;
}

function compare(stack, buildings, i){
	let b = buildings[i];
	if(stack.length == 0 || buildings[stack[stack.length - 1]] < b){
		stack.push(i);
	}
}
