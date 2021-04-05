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
/*
    Consigna: dado un array y un entero, mover todas las ocurrencias de ese entero al final del array.
    Comenzamos con dos punteros, en el primer y último elemento del array.
    Iteramos sobre el mismo siempre que nuestro puntero izquierdo no haya sobrepasado al derecho.
    Dentro de esta iteración, movemos el puntero derecho hasta encontrar el primer elemento (contando desde el final)
    que sea distinto al elemento a mover (toMove).
    Una vez que encontré el último elemento distinto al elemento a mover,
    me pregunto si el elemento del puntero izquierdo es uno de los elementos a mover.
    Si esto es así, quiere decir que mi puntero derecho apunta al ultimo lugar de un elemento distinto,
    y mi puntero izquierdo al primer lugar de un elemento igual al que tengo que mover.
    En dicho caso, intercambiamos los mismos, y seguimos iterando.
*/

function moveElementToEnd(array, toMove) {
    let left = 0, right = array.length - 1;
      
      while(left < right){

        while(array[right] == toMove && left < right) right--;
        if(array[left] == toMove) swap(array, left, right);          
            
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
  