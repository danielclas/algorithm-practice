// Tip: You can use the Array.isArray function to check whether an item
// is a list or an integer.
function productSum(array, depth = 1) {
  
	let sum = 0;

	for(let el of array){
		if(Array.isArray(el)){
			sum += productSum(el, depth + 1);
		}else{
			sum += el;
		}
	}

	return sum  * depth;
}

/**
 * El metodo productSum recibe un array "especial" (puede contener arrays como elementos) y una variable 'depth',
 * que usamos para controlar la "profundidad" de la invocación. El problema nos pide que calculemos la suma de los elementos
 * del array de entrada con este criterio: los elementos numéricos sueltos se suman, y los arrays se suman internamente y se multiplican
 * por su nivel de profundidad (depth). Por ej.: si el array de entrada es [5, [2,2]], entonces sumaremos 5 + 2 * (2 + 2).
 * Podemos resolver este problema recursivamente porque en cualquier caso que encontremos un array, debemos sumar todos sus elementos y
 * a esta suma multiplicarla por su profundidad, a excepciónd de que alguno de esos elementos que intentamos sumar sea una array,
 * en cuyo caso invocamos nuevamente a la misma función, pasándole este elemento en cuestión (el array), y la profundidad actual + 1.
 * Considerando estos datos de entrada [5, [2, 4, [6, 8]]], entonces:
 * 	1-	Invocamos productSum por primera vez. El for principal indica que iteraremos todos los elementos del array.
 * 		Lo primero que debemos evaluar es que dicho elemento sea array o númerico. En nuestra primera iteración tenemos el elemento 5.
 * 		En este caso simplemente lo sumamos a la variable sum que controla el acumulado total.
 * 	2-  En la segunda iteración encontramos un array. En este caso, al ver que la condición isArray es verdadera, invocamos nuevamente
 * 		a productSum, pero esta vez pasandola solamente el elemento actual de la iteración, y aumentando el valor de depth en 1, 
 * 		para denotar que nos adentramos un nivel más abajo
 * 	3-  En esta nueva llamada a productSum con el elemento [2,4, [6,8]] sumamos los dos primero numeros por sí solos, y nos encontramos con otro array.
 * 	4-  Realizamos neuvamente una llamada a productSum, con el elemento [6,8]. En este punto la variable depth vale 3, y dicho elemento solo contiene variable numéricas.
 * 		Por ello, sumamos su contenido y lo devolvemos multiplicándolo por la variable depth. Este valor se retorna a la invocación anterior de productSum (la que se hizo
 * 		con el elemento [2,4,[6,8]]). En este punto ya conocemos el valor calculado del último array (3 (depth) * (6 + 8) = 42), y lo agregamos a la suma acumulada.
 * 	5-  La suma acumulada de esta invocación entonces quedaría 2 + 4 + 42 (48). Como se explica arriba, al devolver este valor lo multiplicamos por la profundidad, en este caso 2.
 * 	6-	Retornamos dicho valor (96) y nos encontramos en el principio del stack de llamadas, quien hizo la primer llamada interna a productSum.
 * 	7-  En este punto ya tenemos resuelto todo el segundo elemento del array original [2, 4, [6, 8]]. Sumamos el valor devuelto a la variable sum (que solo contiene el 5
 * 		sumado en la primer iteración), y devolvemos este resultado como respuesta al problema. Al ser la llamada original, el depth es 1 y por lo tanto la multiplicación
 * 		explicitada en el retorno no aplica.
 * 
 * 	Orden de invocación:
 * 		1- productSum([5, [2, 4, [6, 8]]], depth = 1) -> devuelve 5 + productSum([2, 4, [6, 8]], depth = 2) hacia afuera (101)
 * 			1.1 - productSum([2, 4, [6, 8]], depth = 2) -> devuelve (2 + 4 + productSum([6, 8], depth = 3) + 2) * 2 hacia arriba (96)
 * 				1.2 -	productSum([6, 8], depth = 3) -> devuelve (6 + 8) * 3 hacia arriba (42)
 * 
 */
