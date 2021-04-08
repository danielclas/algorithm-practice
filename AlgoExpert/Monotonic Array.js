function isMonotonic(array) {
    if(array.length <= 2) return true;
      
      let direction;
      
      for(let i = 0 ; i < array.length - 1 ; i++){
          let temp = compare(array[i], array[i+1]);
          if(i != 0 && direction != 0){	
              if(temp != 0 && temp != direction) 
                  return false;
          }else{
              direction = temp;
          }
      }
      
      return true;
  }
  
  function compare(num, num2){	
      return num > num2 ? -1 : (num2 > num ? 1 : 0);
  }
  

  /**
   * Este ejercicio nos pregunta si el array que recibimos como parámetro
   * es monotónico. Un array es monotónico cuando arr[i] <= arr[i+1] o arr[i] >= arr[i+1]
   * para todos sus elementos. En otra palabras, todos sus elementos deben ser menores o iguales al siguiente,
   * o mayores o iguales al siguiente.
   * Para esto comenzamos controlando el largo del array. Si su length es menor o igual a 2
   * no es necesario recorrerlo, porque sus dos o un elemento solo pueden crecer, decrecer o ser iguales.
   * Para comenzar, declaramos una funcion compare que recibe dos numeros y devuelve -1 si el primero es mas grande,
   * 0 si son iguales, o 1 si el segundo es mayor.
   * Luego declaramos una variable direction, que asignaremos en nuestra primer iteración 
   * donde compare(arr[i], arr[i+1]) devuelva 1 o -1 (es decir, podamos inferir la dirección del array)
   * Una vez que direction tiene un valor distinto de 0, iteramos hasta length - 1 y llamamos a la función
   * compare con arr[i] y arr[i+1], y si el valor de retorno de alguna de esas llamadas es distinto del
   * valor que tenemos guardado en 'direction', entonces el array se considera no monotónico y devolvemos false.
   * Si iteramos todo el array y no encontramos ningun compare(arr[i], arr[i+1]) distinto a 'direction',
   * devolvemos true.
   * 
   */
  