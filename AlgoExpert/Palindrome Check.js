function isPalindrome(string) {
	
	let left = 0;
	let right = string.length - 1;
	
	while(left < right){
		if(string[left] != string[right]) 
			return false;

		left++;
		right--;
	}
	
	return true;
}

/*
	Recorremos todo el string de entrada, con dos punteros que comienzan apuntando
	al primer y al ultimo caracter de la cadena. En cada iteracion chequeamos
	que los caracteres en cada posición sean el mismo. Si no lo son, retornamos "false"
	ya que una sola desigualdad alcanza para inferir que el string no es palíndromo.
	En cada iteración movemos los punteros en las dos direcciones.
*/