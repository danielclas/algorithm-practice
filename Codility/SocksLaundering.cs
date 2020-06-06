    public int solution(int K, int[] C, int[] D) {
        var cleans = new HashSet<int>();
        var dirties = new HashSet<int>();
        var count = 0;
        
        foreach(int clean in C){
            if(cleans.Contains(clean)){
                count++;
                cleans.Remove(clean);
            }else{
                cleans.Add(clean);
            }
        }
        
        if(K==0) return count;
        
        foreach(int dirty in D){
            if(cleans.Contains(dirty)){
                count++;
                cleans.Remove(dirty);
                K--;
            }else if(dirties.Contains(dirty) && K>=2){
                count++;
                dirties.Remove(dirty);
                K-=2;
            }else{
                dirties.Add(dirty);
            }
            
            if(K==0) break;
        }
        
        return count;
    }