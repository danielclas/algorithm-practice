static int equalizeArray(int[] arr) {

        var map = new Dictionary<int,int>();
        var max = Int32.MinValue;
        var sum = 0;

        foreach(int n in arr){
            if(map.ContainsKey(n)) map[n]++;
            else map.Add(n,1);
        }

        foreach(var k in map){
            sum+=k.Value;
            if(k.Value>max) max=k.Value;
        }

        return arr.Length-max;
    }