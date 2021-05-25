function selectionSort(array) {
	
	for(let i = 0 ; i < array.length - 1 ; i++){
		let min = i;
		
		for(let j = i + 1 ; j < array.length ; j++){
			if(array[j] < array[min]) min = j;
		}
		
		if(min != i) swap(array, i, min);
	}
	
	return array;
}   

/*

    Consideramos una lista inicial de tamaño uno (que comprende el primer elemento del array), y una lista adicional que contiene el resto de los elementos.
    Estas listas mencionadas son conceptuales, siempre trabajamos con el mismo array en el lugar.
    Iteramos sobre esta segunda lista para obtener el menor elemento, y lo swapeamos con el primero de la misma (que en la próxima iteración será el último de la lista incial)
    En cada iteración, esta lista inicial crece en un elemento y nuestra lista adicional decrece en la misma cantidad.

*/

function swap(array, i, j){
	let temp = array[j];
	array[j] = array[i];
	array[i] = temp;
	
	return array;
}
