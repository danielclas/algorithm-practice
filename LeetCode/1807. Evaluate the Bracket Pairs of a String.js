/**
 * @param {string} s
 * @param {string[][]} knowledge
 * @return {string}
 */
 var evaluate = function(s, knowledge) {
    const values = {};
    const output = [];
    
    for(let kvp of knowledge){
        values[kvp[0]] = kvp[1];
    }
    
    for(let i = 0 ; i < s.length ; i++){
        if(s[i] != '(') output.push(s[i]);
        else{
            const stack = [];
            let j = i + 1;
            while(s[j] !== ')'){
                stack.push(s[j]);
                j++;
            }
            const key = stack.join('');
            output.push(...(values[key] ? values[key] : '?'));
            i = j;
        }
    }
    
    return output.join('');
}