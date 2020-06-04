    public int[] solution(int[] A, int K) {
        var target = new int[A.Length];
        
        for(int i=0 ; i<A.Length ; i++){
            var n = A[i];
            var ind = i+K;
            
            while(ind>A.Length-1){
                ind-=A.Length;
            }
            
            target[ind] = n;
        }
        
        return target;
    }