    static int[] missingNumbers(int[] arr, int[] brr) {

        var bMap = new Dictionary<int,int>();
        var aMap = new Dictionary<int,int>();
        var answer = new List<int>();

        foreach(int n in brr){
            if(bMap.ContainsKey(n)) bMap[n]++;
            else bMap.Add(n,1);
        }

        foreach(int n in arr){
            if(aMap.ContainsKey(n)) aMap[n]++;
            else aMap.Add(n,1);
        }

        foreach(var kvp in bMap){
            if(!aMap.ContainsKey(kvp.Key)
                || kvp.Value>aMap[kvp.Key]){
                    answer.Add(kvp.Key);
                }
        }

        answer.Sort();

        return answer.ToArray();
    }