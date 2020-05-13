public static int pickingNumbers(List<int> a)
    {
        var map = new Dictionary<int,int>();
        var max = Int32.MinValue;

        foreach(int n in a){
            if(map.ContainsKey(n)) map[n]++;
            else map.Add(n,1);
        }

        foreach(var kvp in map){
            int n = 0;
            
            if(map.ContainsKey(kvp.Key-1)){
                if(kvp.Value+map[kvp.Key-1]>max){
                    max = kvp.Value+map[kvp.Key-1];
                }
            }else if(map.ContainsKey(kvp.Key+1)){
                if(kvp.Value+map[kvp.Key+1]>max){
                    max = kvp.Value+map[kvp.Key+1];
                }
            }else if(kvp.Value>max){
                max = kvp.Value;
            }
        }

        return max;
    }