function insertionSort(array) {
	
	for(let i = 1; i < array.length ; i++){
		let j = i;
		while(j > 0 && array[j] < array[j - 1]){
			swap(array, j, j-1);
			j--
		}
	}
	
	return array;
}

/*
    Iteramos todo el largo del array, exceptuando el primer elemento.
    Consideramos una lista inicial de un solo elemento, comprendida por el primer elemento del array.
    Dentro de esta iteración, a partir del elemento en el indice i (ahora controlado por j), recorremos esta lista inicial
    e intercambiamos posiciones con el primer elemento menor al evaluado. En esta segunda iteración,
    que tiene como condición para continuar que el elemento anterior al del índice j sea menor al mismo,
    realizamos dicho intercambio (indice j actual por indice j - 1),
    y luego retrocedemos en una posición la variable j (para poder seguir comparando con los elementos anteriores).
*/

function swap(array, i, j){
	let temp = array[j];
	array[j] = array[i];
	array[i] = temp;
	
	return array;
}

// Do not edit the line below.
exports.insertionSort = insertionSort;
