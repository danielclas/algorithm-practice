    public IList<int> GetRow(int rowIndex) {        
         
        var times = rowIndex;
        
        if(rowIndex == 0) return new List<int>(){1};
        
        var last = new List<int>{1,1};
        
        while(times>1){
            var nextRow = new List<int>(){1};
            var len = last.Count;
            int a=0, b=1;
            
            while(len>1){
                var n = last[a]+last[b];
                nextRow.Add(n);
                a++;
                b++;
                len--;
            }
            
            nextRow.Add(1);     
            last = nextRow;
            times--;
        }
        
        return last;
    }