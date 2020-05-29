 static int lonelyinteger(int[] a) {

        var map = new Dictionary<int,int>();

        foreach(int n in a){
            if(map.ContainsKey(n)){
                map[n]++;
            }else{
                map.Add(n,1);
            }
        }

        foreach(var kvp in map){
            if(kvp.Value == 1) 
                return kvp.Key;
        }

        return -1;
    }