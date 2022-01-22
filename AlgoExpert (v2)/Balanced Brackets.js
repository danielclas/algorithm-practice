function balancedBrackets(string) {
    const opening = { '{': 1, '(': 2, '[': 3 };
    const closing = { '}': 1, ')': 2, ']': 3 };
      
      const stack = [];
      
      for(let char of string){
          if(!closing[char] && !opening[char]) continue;
          
          if(opening[char]) stack.push(char);
          else{
              if(stack.length === 0) return false;
              
              const last = stack[stack.length - 1];
              
              if(opening[last] === closing[char]) stack.pop();
              else return false;
          }		
      }
      
      return stack.length === 0;
  }
  
  // Do not edit the line below.
  exports.balancedBrackets = balancedBrackets;
  