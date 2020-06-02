    public int MinSetSize(int[] arr) {
        
        var map = new Dictionary<int,int>();
        var len = arr.Length;
        var count = 0;
        
        foreach(int n in arr){
            if(map.ContainsKey(n)) map[n]++;
            else map.Add(n,1);
        }
        
        var list = map.Values.ToList();
        list.Sort();
        list.Reverse();
        
        if(list.Count == 1) return 1;
        
        foreach(int n in list){
                len-=n;
                count++;            
            
            if(len<=arr.Length/2) break;
        }
        
        return count;
    }