  public int[] SortByBits(int[] arr) {
        
        var map = new SortedDictionary<int,List<int>>();
        var answer = new List<int>();
        
        foreach(int n in arr){
            var a = AmountOfOnes(n);
            if(map.ContainsKey(a)){
                map[a].Add(n);
            }else{
                map.Add(a, new List<int>(){n});
            }
        }
        
        foreach(var kvp in map){
            var list = kvp.Value;
            list.Sort();
            foreach(var n in list){
                answer.Add(n);
            }
        }        
        
        return answer.ToArray();
        
    }
    
    public int AmountOfOnes(int n){
        
        string b = Convert.ToString(n,2);
        int count = 0;
        
        foreach(var c in b)
            if(c=='1') count++;
        
        return count;        
    }