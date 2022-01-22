function groupAnagrams(words) {
	const added = Array(words.length).fill(false);
	const output = [];
	
	for(let i = 0 ; i < words.length ; i++){
		const word1 = words[i];
		const ans = [word1];
		
		if(added[i]) continue;
		
		for(let j = i + 1 ; j < words.length ; j++){
			const word2 = words[j];
			if(areAnagrams(word1, word2)){
				ans.push(word2);
				added[j] = true;
			}
		}
		
		added[i] = true;
		output.push(ans);
	}
	
	return output;
}

function areAnagrams(w1, w2){
	const chars = {};
	
	for(let char of w1){
		if(!chars[char])
			chars[char] = 0;
		chars[char]++;
	}
	
	for(let char of w2){
		if(!chars[char]) return false;
		chars[char]--;
		if(chars[char] < 0) return false;
	}
	
	for(let char in chars){
		if(chars[char] != 0)
			return false;
	}
		
	return true;
}

// Do not edit the line below.
exports.groupAnagrams = groupAnagrams;
