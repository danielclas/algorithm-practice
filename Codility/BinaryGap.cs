public int solution(int N) {
        var bin = Convert.ToString(N,2);
        var count = 0;
        var max = 0;
        
        for(int i=1 ; i<bin.Length-1 ; i++){
            if(bin[i]=='1'){
                if(count>max) max = count;
                count=0;
            }else{
                count++;
            }
        }
        
        if(bin[bin.Length-1]=='1'){
            if(count>max)
                max = count;
        }
        
        return max;
    }