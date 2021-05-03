//Solution 1

function longestPeak(array) {
    let max = 0;
      
    for(let i = 0 ; i < array.length ; i++){
        let peak = findPeak(array, i);
        if(peak != -1){
            let base = findBase(array, peak);
            let len = base - i + 1;
            max = len > max ? len : max;
            i = len > max ? base : i;
        }
    }
    
    return max;
}
  
function findBase(array, i){
    let base = -1;
    let j = i + 1;
    
    while(j < array.length && array[j - 1] > array[j]){
        base = j;
        j++;
    }
    
    return base;
}
  
function findPeak(array, i){
    
    let peak = -1;
    let j = i + 1;
    
    while(j < array.length && array[j - 1] < array[j]){
        peak = j;	
        j++;
    }
    
    return peak;
}
  
//Solution 2

function longestPeak(array) {
    let max = 0;
    
    for(let i = 0 ; i < array.length ; i++){
        let base, peak;
        let j = i + 1;
        while(j < array.length && array[j - 1] < array[j]){
            peak = j;
            j++;
        } 
        if(peak){		
            while(j < array.length && array[j - 1] > array[j]){
                base = j;
                j++;
            }		 
        }
        
        if(base){
            let len = base - i + 1;
            max = len > max ? len : max;
            i = len > max ? base : i;
        }else{
			i = peak ? peak : i;
		}
    }
    
    return max;
}
  

  