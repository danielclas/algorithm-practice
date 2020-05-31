    public bool CanBeEqual(int[] target, int[] arr) {
        
        var t = new Dictionary<int,int>();
        var a = new Dictionary<int,int>();
        
        for(int i=0 ; i<arr.Length ; i++){
            if(t.ContainsKey(target[i])) t[target[i]]++;
            else t.Add(target[i],1);
            
            if(a.ContainsKey(arr[i])) a[arr[i]]++;
            else a.Add(arr[i],1);
        }
        
        foreach(var kvp in a){
            if(!t.ContainsKey(kvp.Key)
               || t[kvp.Key] != kvp.Value){
                return false;
            }
        }
        
        return true;
    }