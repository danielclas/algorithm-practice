    public IList<string> FizzBuzz(int n) {
        
        var k = 2;
        IList<string> answer = new List<string>(){"1"};
        
        while(k<n+1){
            if(k%3==0){
                if(k%5==0) answer.Add("FizzBuzz");
                else answer.Add("Fizz");                
            }else if(k%5==0)
                answer.Add("Buzz");
            else
                answer.Add($"{k}");
            
            k++;
        }
        
        return answer;
    }