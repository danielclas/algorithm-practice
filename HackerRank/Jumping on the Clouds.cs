static int jumpingOnClouds(int[] c) {

        int jumps = 0;

        for(int i=0 ; i<c.Length-1 ; i++){
            if(i+2<c.Length && c[i+2]==0){
                i++;
            }
            jumps++;            
        }

        return jumps;

    }