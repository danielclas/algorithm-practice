
var removeOuterParentheses = function(s) {
    let answer = [...s];
    let stack = [];
    let indices = [];
    let opening = {'(' : ')', '[' : ']', '{' : '}'};

    for(let i = 0 ; i < s.length ; i++){
        let c = s[i];
        if(opening[c]){
            stack.push(c);
            indices.push(i);
        }else{
            stack.pop();
            let j = indices.pop();
            if(indices.length == 0){ 
                answer[j] = '';
                answer[i] = '';
            }         
        }
    }

    return answer.join('');
};