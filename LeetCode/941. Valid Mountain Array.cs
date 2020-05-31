    public bool ValidMountainArray(int[] A) {
        
        var peak = A.Length-1;
        
        if(A.Length <= 2) return false;
        
        for(int i=0 ; i<A.Length-1 ; i++){
            if(A[i]==A[i+1]) return false;
            if(A[i]>A[i+1]){
                peak = i;
                break;
            }
        }
        
        if(peak==0 || peak==A.Length-1) return false;
        
        for(int i=0 ; i<A.Length-1 ; i++){
            if(A[i]>=A[i+1] && i<peak){
                return false;
            }else if(A[i]<=A[i+1] && i>peak){
                return false;
            }
        }
        
        return true;
    }