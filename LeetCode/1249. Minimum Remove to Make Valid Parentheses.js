var minRemoveToMakeValid = function(s) {
    let chars = s.split('');
    let stack = [];
    let stackIndices = [];
    let opening = {'(' : ')', '[' : ']', '{' : '}'};
    let closing = {')' : true, '}' : true, ']':  true};

    for(let i = 0 ; i < s.length ; i++){
        let c = s[i];
        if(!opening[c] && !closing[c]) continue;
        if(opening[c]){
            stack.push(c);
            stackIndices.push(i);
        }
        else{
            stackIndices.pop();
            if(opening[stack.pop()] != c) chars[i] = '';               
        }
    }   

    for(let i of stackIndices) chars[i] = '';

    return chars.join('');
};