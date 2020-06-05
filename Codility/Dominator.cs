    public int solution(int[] A) {
        // write your code in C# 6.0 with .NET 4.5 (Mono)
        var dict = new Dictionary<int,int>();
        
        foreach(int n in A){
            if(dict.ContainsKey(n)){
                dict[n]++;
            }else{
                dict.Add(n,1);
            }
        }
        
        foreach(var kvp in dict){
            if(kvp.Value>A.Length/2){
                return Array.IndexOf(A, kvp.Key);
            }
        }
        
        return -1;
    }