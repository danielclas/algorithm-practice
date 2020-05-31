    public IList<IList<int>> MinimumAbsDifference(int[] arr) {
        
        IList<IList<int>> answer = new List<IList<int>>();
        var nums = new HashSet<int>();
        var min = Int32.MaxValue;
        Array.Sort(arr);
        
        for(int i=0 ; i<arr.Length-1 ; i++){
            var a = arr[i];
            var b = arr[i+1];
            
            if(Math.Abs(a-b)<min){
                min = Math.Abs(a-b);
            }
            
            nums.Add(a);
        }
        
        nums.Add(arr[arr.Length-1]);
        
        foreach(int n in nums){
            if(nums.Contains(n+min)){
                answer.Add(new List<int>(){n,n+min});
            }
        }
        
        return answer;
    }