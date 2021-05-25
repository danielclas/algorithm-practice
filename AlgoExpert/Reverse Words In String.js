function reverseWordsInString(string) {
  
	let words = getWords(string);
	let sentence = [];

	for(let i = words.length - 1 ; i >= 0 ; i--){
		sentence.push(words[i]);
	}
		
	return sentence.join('');
}

function getWords(string){
	
	let words = [];
	let word = [];
	
	for(let char of string){
		if(word.length == 0){
			word.push(char);
		}else{
			if((char == ' ' && word[0] != ' ') || (char != ' ' && word[0] == ' ')){
				words.push(word.join(''));
				word.length = 0;
				word.push(char);
			}else{
				word.push(char);
			}
		}
	}
	
	if(word.length > 0) words.push(word.join(''));
	
	return words;
}
