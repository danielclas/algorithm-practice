    public int FindLucky(int[] arr) {
        
        var max = 0;
        var map = new Dictionary<int,int>();
        
        foreach(int n in arr){
            if(map.ContainsKey(n)) map[n]++;
            else map.Add(n,1);
        }
        
        foreach(var kvp in map){
            if(kvp.Value==kvp.Key && kvp.Value>max){
                max = kvp.Value;                
            }
        }
        
        return max != 0 ? max : -1;
    }