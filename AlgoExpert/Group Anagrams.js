function groupAnagrams(words) {
	
	let track = {};
	let arr = [];
	
	for(let i = 0 ; i < words.length ; i++){
		if(track[i]) continue;
		let arr2 = [words[i]];
		track[i] = true;
		
		for(let j = i + 1 ; j < words.length ; j++){
			if(!track[j] && areAnagram(words[i], words[j])){
				arr2.push(words[j]);
				track[j] = true;
			}
		}
		
		arr.push(arr2);
	}
	
	return arr;
}

function areAnagram(s1, s2){
	//charCode - 97
	let chars = Array(26).fill(0);
	
	if(s1.length != s2.length) return false;
	
	for(let i = 0 ; i < s1.length ; i++){
		let ind1 = (""+s1[i]).charCodeAt(0) - 97;
		let ind2 =  (""+s2[i]).charCodeAt(0) - 97;
		
		chars[ind1]++;
		chars[ind2]--;
	}
	
	return !chars.some(c => c != 0);
}

// Do not edit the line below.
exports.groupAnagrams = groupAnagrams;
