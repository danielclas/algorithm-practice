function taskAssignment(k, tasks) {
    let arr = [];
    let sorted = [...tasks]; //1
    let indexMap = {}; //2
    
    sorted.sort((a,b) => a - b);
    
    for(let i = 0 ; i < tasks.length ; i++){ //3
        if(!indexMap[tasks[i]]) indexMap[tasks[i]] = [];
        
        indexMap[tasks[i]].push(i);
    }
    
    for(let i = 0, j = tasks.length - 1 ; i < j ; i++, j--){ //4
        let a = sorted[i], b = sorted[j]; //4.1
        let ai = indexMap[a].pop(), bi = indexMap[b].pop(); //4.2
        arr.push([ai, bi]);
    }
        
    return arr;
}

/*
    1 - Creamos una copia del array 'tasks' para ordenarlo
    2 - Declaramos un mapa que contendrá como clave un número (elemento del array 'tasks')
        y como valor un array con todos los índices en los que ocurre dicho número
    3 - Iteramos el array 'tasks' para popular el mapa del punto 2.
    4 - Iteramos el array nuevamente, esta vez para ir completando el array de retorno. 
        La lógica de la solución consiste en ordenar el array de entrada (punto 1) para luego
        iterarlo con dos punteros (uno al principio y otro al final). De esta manera siempre agrupamos
        el valor de menor valor con el de mayor valor disponibles. Esto nos asegura que las sumas de las tareas
        son las menores posibles
        4.1 - Obtenemos del array 'sorted' los elementos a y b, que serían los de menor y mayor valor disponibles
        4.2 - En el indexMap (ver punto 2), usamos los elementos a y b como clave para obtener el indice donde se encuentran
              en el array original. Utilizamos la función pop() ya que está nos asegura que no utilizaremos el mismo índice
              dos veces
*/