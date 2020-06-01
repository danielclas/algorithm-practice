    public int[] RelativeSortArray(int[] arr1, int[] arr2) {
        
        var map = new Dictionary<int,int>();
        var answer = new List<int>();
        var extra = new List<int>();
        
        foreach(int n in arr1){
            if(map.ContainsKey(n)) map[n]++;
            else map.Add(n,1);
        }
        
        foreach(int n in arr2){
            var times = map[n];
            while(times>0){
                answer.Add(n);
                times--;
            }
            map.Remove(n);
        }
        
        foreach(var kvp in map){
            var times = kvp.Value;
            while(times>0){
                extra.Add(kvp.Key);
                times--;
            }
        }
        
        extra.Sort();
        answer.AddRange(extra);
        
        return answer.ToArray();        
    }
}