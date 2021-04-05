//Solution 1

function moveElementToEnd(array, toMove) {
  
	for(let i = 0 ; i < array.length - 1 ; i++){
		if(array[i] == toMove){
			let index = lastDifferentElement(array, i, toMove);
			if(index != -1) array = swap(array, i, index);
		}
	}
	
	return array;
}

function lastDifferentElement(array, start, element){
	
	for(let i = array.length - 1 ; i > start ; i--){
		if(array[i] != element) return i;
	}
	
	return -1;	
}

function swap(array, i, j){
	
	let temp = array[i];
	array[i] = array[j];
	array[j] = temp;
	
	return array;	
}



// Do not edit the line below.
exports.moveElementToEnd = moveElementToEnd;

//Solution 2

function moveElementToEnd(array, toMove) {
    let left = 0, right = array.length - 1;
      
      while(left < right){
          while(array[right] == toMove && left < right){
              right--;
          }
  
          if(array[left] == toMove){
              array = swap(array, left, right);
          }
              
          left ++;
      }
      
      return array;
  }
  
  function swap(array, i, j){
      
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
      
      return array;	
  }
  
  
  // Do not edit the line below.
  exports.moveElementToEnd = moveElementToEnd;
  