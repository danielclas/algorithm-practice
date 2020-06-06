    public string CustomSortString(string S, string T) {
        
        var temp = new StringBuilder(T);
        var answer = new StringBuilder();
        
        foreach(char c in S){
            var ind = temp.ToString().IndexOf(c);
            while(ind!=-1){
                answer.Append(c);
                temp.Remove(ind,1);
                ind = temp.ToString().IndexOf(c);
            }            
        }
        
        answer.Append(temp);
        
        return answer.ToString();
    }