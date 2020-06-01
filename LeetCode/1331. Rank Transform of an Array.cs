    public int[] ArrayRankTransform(int[] arr) {
        
        var temp = new List<int>(arr);
        var map = new Dictionary<int,int>();        
        var answer = new List<int>();
        var rank = 1;
        
        temp.Sort();
        
        foreach(int n in temp){
            if(!map.ContainsKey(n)){
                map.Add(n,rank);
                rank++;
            }
        }
        
        foreach(int n in arr){
            answer.Add(map[n]);
        }        
        
        return answer.ToArray();
    }