var countGoodSubstrings = function(s) {
    let count = 0;
    let arr = [s[0], s[1]];
    
    for(let i = 2 ; i < s.length ; i++){
        let c = s[i];
        if(!arr.includes(c) && arr[0] != arr[1]) count++;
        arr.shift();
        arr.push(c);
    }    
    
    return count;
};