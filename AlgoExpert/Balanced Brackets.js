function balancedBrackets(string) {
	let stack = [];
	let opening = {'(' : ')', '[' : ']', '{' : '}'};
	let closing = {')' : true, '}' : true, ']':  true};
	
	for(let c of string){
		if(!opening[c] && !closing[c]) continue;
		if(opening[c]) stack.push(c);
		else if(opening[stack.pop()] != c) return false;		
	}	
	
	return stack.length == 0;
}
