    public int[] SortArrayByParityII(int[] A) {
        
        int odd = 1, even=0;
        var target = new int[A.Length];
        
        for(int i=0 ; i<A.Length ; i++){
            var n = A[i];
            if(n%2==0){
                target[even]=n;
                even+=2;
            }else{
                target[odd]=n;
                odd+=2;
            }
        }
        
        return target;
    }