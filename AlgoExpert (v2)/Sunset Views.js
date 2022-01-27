function sunsetViews(buildings, direction) {
    let stack = [];
      let indices = [];
          
      if(direction === 'EAST'){
          for(let i = 0 ; i < buildings.length ; i++){
              compare(stack, indices, buildings, i);
          }
      }else{
          for(let i = buildings.length - 1 ; i >= 0 ; i--){
              compare(stack, indices, buildings, i);
          }
      }	
      
    return indices.sort((a,b) => a - b);
  }
  
  function compare(stack, indices, buildings, i){
          const b = buildings[i];
          if(stack.length === 0){
              stack.push(b);
              indices.push(i);
          }else{
              let last = stack[stack.length - 1]
              if(b < last){
                  stack.push(b);
                  indices.push(i);
              }else if(b >= last){
                  while(last && b >= last){
                      stack.pop();
                      indices.pop();
                      if(stack.length === 0) break;
                      last = stack[stack.length - 1]
                  }
                  
                  stack.push(b);
                  indices.push(i);
              }
          }
  }
  
  // Do not edit the line below.
  exports.sunsetViews = sunsetViews;
  