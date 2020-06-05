  public int solution(int X, int[] A) {
        // write your code in C# 6.0 with .NET 4.5 (Mono)
        var target = new bool[X];
        var count = 0;
        
        if(A.Length == 0) return -1;
        
        for(int i=0 ; i<A.Length ; i++){
            if(A[i]-1<target.Length){
                if(!target[A[i]-1]){
                    target[A[i]-1]=true;
                    count++;
                }
            }
            if(count == X)
                return i;
        }
        
        return -1;
    }