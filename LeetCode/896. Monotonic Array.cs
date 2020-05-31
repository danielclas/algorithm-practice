    public bool IsMonotonic(int[] A) {
        
        bool inc = true;
        var stack = new Stack<int>();
        
        for(int i=0 ; i<A.Length-1 ; i++){
            if(A[i]!=A[i+1]){
                inc = A[i]<A[i+1];
                break;
            }
        }
        
        foreach(int n in A){
            if(stack.Count==0){
                stack.Push(n);
            }else{
                var t = stack.Peek();
                if((inc && n<t) || (!inc && n>t)){
                    Console.WriteLine(n+""+t);
                    return false;
                }
                
                stack.Push(n);
            }
        }
        
        return true;
    }