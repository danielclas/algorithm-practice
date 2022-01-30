function laptopRentals(times) {

	times = times.sort((a,b) => a[0] - b[0]);
	
  const used = {};
	let laptops = 0;
	
	for(let i = 0 ; i < times.length ; i++){
		if(i in used) continue;
		else used[i] = true;
		
		let time = times[i];
		for(let j = i + 1 ; j < times.length ; j++){
			if(j in used) continue;
			if(time[1] <= times[j][0]){
				time = times[j];
				used[j] = true;
			}
		}
		laptops++;
	}
	
  return laptops;
}

// Do not edit the line below.
exports.laptopRentals = laptopRentals;
