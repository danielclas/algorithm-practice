public int solution(int[] A) {
        
        var arr = new bool[A.Length];
        int i = 0;
        
        if(A.Length == 0) return 1;
        
        foreach(int n in A){
            if(n-1<arr.Length)
                arr[n-1]=true;
        }
        
        for( ; i<arr.Length ; i++){
            if(!arr[i]){
                return i+1;
            }
        }
        
        return A[i-1]+1;
    }