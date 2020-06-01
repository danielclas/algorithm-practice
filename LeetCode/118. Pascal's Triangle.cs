    public IList<IList<int>> Generate(int numRows) {
        
        IList<IList<int>> answer = new List<IList<int>>();
        
        if(numRows == 0) return answer;
        
        answer.Add(new List<int>{1});
        
        if(numRows == 1) return answer;
        
        answer.Add(new List<int>{1,1});
        
        while(numRows>2){
            var temp = answer.Last();
            var nextRow = new List<int>(){1};
            var len = temp.Count;
            int a=0, b=1;
            
            while(len>1){
                var n = temp[a]+temp[b];
                nextRow.Add(n);
                a++;
                b++;
                len--;
            }
            
            nextRow.Add(1);     
            answer.Add(nextRow);
            numRows--;
        }
        
        return answer;
    }