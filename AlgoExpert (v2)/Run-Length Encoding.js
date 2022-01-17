function runLengthEncoding(string) {
    const answer = [];
      let stack = [];
      
      for(let char of string){
          if(stack.length === 0){
              stack.push(char);
          }else{
              if(stack[stack.length - 1] === char){
                  if(stack.length + 1 === 9){
                      answer.push(9, char);
                      stack = [];
                  }else stack.push(char);
              }else{
                  answer.push(stack.length, stack.pop());
                  stack = [char];
              }
          }		
      }
      
      if(stack.length != 0) answer.push(stack.length, string[string.length - 1]);
      
      return answer.join('');
  }
  
  // Do not edit the line below.
  exports.runLengthEncoding = runLengthEncoding;
  