function taskAssignment(k, tasks) {
    let temp = [];
      
      for(let i = 0 ; i < tasks.length ; i++) 
          temp.push({ index: i, value: tasks[i] });
      
      temp = temp.sort((a,b) => a.value - b.value);
      
      const output = [];
      
      for(let i = 0, j = temp.length - 1 ; i < temp.length / 2 ; i++, j--){
          output.push([temp[i].index, temp[j].index]);
      }
      
    return output;
  }
  
  // Do not edit the line below.
  exports.taskAssignment = taskAssignment;
  