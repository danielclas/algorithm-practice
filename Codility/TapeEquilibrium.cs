   public int solution(int[] A) {
        
        var min = Int32.MaxValue;
        var left = 0;
        var total = 0;
        
        if(A.Length==2) return Math.Abs(A[0]-A[1]);
        
        foreach(int n in A) total+=n;
        
        for(int i=0 ; i<A.Length ; i++){
            left+=A[i];
            total-=A[i];
            if(Math.Abs(left-total)<min){
                min = Math.Abs(left-total);
            }
        }
        
        return min;
    }