    public bool IsPowerOfTwo(int n) {
        
        double num = n < 0 ? n*-1 : n;
        
        do{
            if(num==1 || num/2==1){
                if(n>0)
                    return true;
            }            
            num/= 2;
        }while(num>=2);
        
        return false;
    }