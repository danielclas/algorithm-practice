/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function(strs) {
    const input = strs.map(s => s.split('').sort().join(''));
    const words = {};
    const output = [];
    
    for(let i = 0 ; i < input.length ; i++){
        const word = input[i];
        if(!words[word]) words[word] = [];
        words[word].push(i);
    }
    
    for(let key in words){
        const indices = words[key];
        const temp = [];
        for(let i of indices)
            temp.push(strs[i]);
        output.push(temp);
    }
    
    return output;
};