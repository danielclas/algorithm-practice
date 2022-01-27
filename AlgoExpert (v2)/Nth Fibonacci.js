function getNthFib(n) {
    const seq = [0, 1];
      
      if(n <= 2) return seq[n - 1];
      
      while(n > 2){
          seq.push(seq[0] + seq[1]);
          seq.shift();
          n--;
      }
      
      return seq.pop();
  }
  
  // Do not edit the line below.
  exports.getNthFib = getNthFib;
  