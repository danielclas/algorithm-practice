function shortenPath(path) {
    let stack = [];
    let isAbsolutePath = path[0] == '/';
    
    for(let token of path.split('/')){
        if(token == '..'){			
            if(stack.length == 0 || stack[stack.length - 1] == '..'){
                if(!isAbsolutePath) stack.push(token);
            }else{
                stack.pop();	
            }
        }
        else if(token != '.' && token != '') stack.push(token);
    }
    
    return (isAbsolutePath ? '/' : '') + stack.join('/');
}
  