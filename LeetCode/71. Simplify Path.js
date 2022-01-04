/**
 * @param {string} path
 * @return {string}
 */
 var simplifyPath = function(path) {
    const ops = path.split('/').filter((el) => el !== '/' && el !== '');
    const stack = [];
    
    for(let op of ops){
        if(op === '..') stack.pop();
        else if(op !== '.') stack.push(op);
    }    
    
    
    return '/' + stack.join('/');    
};