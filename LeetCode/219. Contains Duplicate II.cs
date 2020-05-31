    public bool ContainsNearbyDuplicate(int[] nums, int k) {
        
        var map = new Dictionary<int,int>();
       
        for(int i=0 ; i<nums.Length ; i++){
            if(map.ContainsKey(nums[i])){
                if(i-map[nums[i]]<=k){
                    return true;
                }else{
                    map[nums[i]]=i;
                }
            }else{
                map.Add(nums[i],i);
            }
        }
        
        return false;
    }