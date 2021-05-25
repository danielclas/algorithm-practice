var validateStackSequences = function(pushed, popped) {
    let stack = [];
    let i = 0, j = 0;
    
    while(j < pushed.length){
        stack.push(pushed[j]);
        if(pushed[j] == popped[i]) break;
        j++;
    }
    
    j++;
    
    while(i != popped.length){
        if(stack[stack.length - 1] == popped[i]){
            i++;
            stack.pop();
        }else if(j < pushed.length){
            while(j < pushed.length){
                if(pushed[j] == popped[i]){
                    i++;
                    j++;
                    break;
                }else stack.push(pushed[j]);
                j++;
            }
        }else return false;      
    }
    
    return true;    
};