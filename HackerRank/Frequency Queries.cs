static List<int> freqQuery(List<List<int>> queries) {

        var map = new Dictionary<int,int>();
        var answer = new List<int>();
        var total = 0;

        foreach(var q in queries){
            var op = q[0];
            var key = q[1];
            
            if(op == 3){
                if(key>total){
                    answer.Add(0);
                }else{                    
                    answer.Add( map.ContainsValue(key) ? 1 : 0);
                }
                continue;
            }

            if(map.ContainsKey(key)){
                if(op == 1){
                    map[key]++;
                    total++;
                }else if(op == 2){
                    if(map[key]>0){
                        map[key]--;
                        total--;
                    }
                }                                      
            }else{
                if(op == 1){
                    map.Add(key,1);
                    total++;
                }
            }        
           
        }

        return answer;
    }