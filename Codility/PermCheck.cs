    public int solution(int[] A) {
        
        var target = new bool[A.Length];
        
        foreach(int n in A){
            if(n-1<target.Length)
                target[n-1]=true;
        }
        
        foreach(bool b in target){
            if(!b) return 0;
        }
        
        return 1;
    }