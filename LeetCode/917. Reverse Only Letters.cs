    public string ReverseOnlyLetters(string S) {
        
        var answer = new char[S.Length];
        var temp = new List<char>();
        
        for(int i=0 ; i<S.Length ; i++){
            if((S[i]>='a' && S[i]<='z')
            || (S[i]>='A' && S[i]<='Z')){
                temp.Add(S[i]);    
            }else{
                answer[i] = S[i];
            }
        }
        
        var index = 0;
        
        for(int i=temp.Count-1 ; i>=0 ; i--){
            while(answer[index]!=default(char)){
                index++;
            }
            answer[index] = temp[i];
            index++;
        }
        
        return new string(answer);  
    }