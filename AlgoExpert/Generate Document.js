function generateDocument(characters, document) {  
	let map = {};

	for(let c of characters){
		if(map[c]) map[c]++;
		else map[c] = 1;
	}

	for(let c of document){
		if(!map[c] || map[c] == 0){
			return false;
		}else{
			map[c]--;
		}
	}
		
	return true;
}
