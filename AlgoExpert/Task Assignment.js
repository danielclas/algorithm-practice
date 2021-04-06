function taskAssignment(k, tasks) {
    let arr = [];
      let sorted = [...tasks];
      let indexMap = {};
      
      sorted.sort((a,b) => a - b);
      
      for(let i = 0 ; i < tasks.length ; i++){
          if(!indexMap[tasks[i]]) indexMap[tasks[i]] = [];
          
          indexMap[tasks[i]].push(i);
      }
      
      for(let i = 0, j = tasks.length - 1 ; i < j ; i++, j--){
          let a = sorted[i], b = sorted[j];
          let ai = indexMap[a].pop(), bi = indexMap[b].pop();
          tasks[ai] = -1;
          tasks[bi] = -1;
          arr.push([ai, bi]);
      }
      
    return arr;
  }
  
  // Do not edit the line below.
  exports.taskAssignment = taskAssignment;
  