/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
        
    let chars = [];
    
    for(let i = 0 ; i < command.length ; i++){
        if(command[i] == 'G')
            chars.push('G');
        else if(command[i] == '(' && command[i + 1] == ')'){
            chars.push('o');
            i += 1;
        }else{
            chars.push('al');
            i += 3;
        }
    }
    
    return chars.join('');
};