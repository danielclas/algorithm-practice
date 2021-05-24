var minAddToMakeValid = function(s) {
    let stack = [];
    let opening = {'(': ')', '[': ']', '{': '}'};
    let count = 0;

    for(let c of s){
        if(opening[c]) stack.push(c);
        else if(opening[stack.pop()] != c) count++;	
    }

    return stack.length + count;
};