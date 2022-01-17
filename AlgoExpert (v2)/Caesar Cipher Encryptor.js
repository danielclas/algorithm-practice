
const Z_CHAR_CODE = 'z'.charCodeAt(0);
const TOTAL_CHARS = 26;

function caesarCipherEncryptor(string, key) {
	
	if(key > TOTAL_CHARS) key = key % TOTAL_CHARS;
	if(key === 0) return string;
	
	const answer = [];
	
	for(let char of string){
		let positions = key;
		let code = char.charCodeAt(0);
		
		if(code + positions > Z_CHAR_CODE){
			positions = key + code - Z_CHAR_CODE - 1;
			answer.push(shift('a', positions));
		}else answer.push(shift(char, positions));
	}
	
	
	return answer.join('');
}

function shift(char, positions){
	return String.fromCharCode(char.charCodeAt(0) + positions);
}
	
// Do not edit the line below.
exports.caesarCipherEncryptor = caesarCipherEncryptor;
