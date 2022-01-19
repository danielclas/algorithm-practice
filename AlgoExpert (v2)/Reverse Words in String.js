function reverseWordsInString(string) {

	const words = [];
	const output = [];
	let word = [];
	let isWhiteSpace = false;
	
	for(let char of string){
		if(word.length === 0){
			word.push(char);
			isWhiteSpace = char === ' ';
		}else if((isWhiteSpace && char === ' ') || (!isWhiteSpace && char !== ' ')){
			word.push(char);
		}else{
			words.push(word.join(''));
			isWhiteSpace = char === ' ';
			word = [char];
		}
	}
	
	if(word) words.push(word.join(''));
	
	for(let i = words.length - 1 ; i >= 0 ; i--){
		output.push(words[i]);
	}
	
	return output.join('');
}

// Do not edit the line below.
exports.reverseWordsInString = reverseWordsInString;
