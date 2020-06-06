    public bool BackspaceCompare(string S, string T) {
     
        return Normalize(S) == Normalize(T);        
    }
    
    public static string Normalize(string s){
        
        var stack = new Stack<char>();
        char[] arr;
        
        foreach(char c in s){
            if(c == '#'){
                if(stack.Count>0)
                    stack.Pop();
            }else{
                stack.Push(c);
            }
        }
        
        if(stack.Count == 0) return "";
        
        arr = new char[stack.Count];
        
        for(int i=arr.Length-1 ; i>=0 ; i--){
            arr[i] = stack.Pop();
        }
        
        return new string(arr);   
    }