 static int migratoryBirds(List<int> arr) {

        var map = new Dictionary<int,int>();
        var max = Int32.MinValue;
        var maxKey = Int32.MaxValue;

        foreach(int n in arr){
            if(map.ContainsKey(n)) map[n]++;
            else map.Add(n,1);

            if(map[n]>max || (map[n]==max && n<maxKey)){
                max = map[n];
                maxKey = n;
            }
        }

        return maxKey;
    }