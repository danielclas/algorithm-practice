/**
 * Task: Write a function that takes in a string and returns its longest substring
 * withouth duplicate characters.
 */

function longestSubstringWithoutDuplication(string) {
	
	let answer = [];
	let stack = [];
	let chars = {};
	
	for(let c of string){
		if(stack.length == 0){
			stack.push(c);
			chars[c] = true;
			continue;
		}
		
		if(chars[c]){
			if(stack.length > answer.length){
				answer = [...stack];
			}			
            
			while(chars[c]){
				let k = stack.shift();
				delete chars[k];
			}
		}
			
		stack.push(c);
		chars[c] = true;
	}
	
	if(stack.length > answer.length) answer = stack;
	
	return answer.join('');
}

// Do not edit the line below.
exports.longestSubstringWithoutDuplication = longestSubstringWithoutDuplication;
