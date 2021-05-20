function minimumWaitingTime(queries) {
	
	if(queries.length == 1) return 0;

	queries.sort((a,b) => a - b);

	let sum = 0;

	for(let i = 0 ; i < queries.length - 1 ; i++){
		sum += queries[i] * (queries.length - i - 1);
	}

	return sum;
}
