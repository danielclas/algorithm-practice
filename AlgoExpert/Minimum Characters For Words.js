function minimumCharactersForWords(words) {
    let obj = {};
    let arr = [];
    
    for(let w of words){
        let chars = charsFromWord(w);
        let keys = Object.keys(chars);
        for(let k of keys){
            obj[k] = obj[k] >= chars[k] ? obj[k] : chars[k];
        }
    }
    
    for(let k of Object.keys(obj)){
        let count = 0;
        while(count != obj[k]){
            arr.push(k);
            count++;
        }
    }
    
    return arr;
}
  
function charsFromWord(word){
    let obj = {};
    
    for(let c of word){
        if(!obj[c]) obj[c] = 0;
        obj[c]++;
    }
    
    return obj;
}
  