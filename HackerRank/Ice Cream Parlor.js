function icecreamParlor(m, arr) {
    const values = {};
    
    for(let i = 0 ; i < arr.length ; i++){
        let num = m - arr[i];
        if(values[num]) return [values[num], i + 1];
        values[arr[i]] = i + 1;
    }      
    
    return [];
}
