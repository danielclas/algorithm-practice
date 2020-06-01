    public int[] Intersection(int[] nums1, int[] nums2) {
        
        var temp = nums1.Length > nums2.Length ? nums1 : nums2;
        var smaller = nums2.Length < nums1.Length ? nums2 : nums1;
        var map = new HashSet<int>();
        var answer = new HashSet<int>();
        
        foreach(int n in temp)
            if(!map.Contains(n)) map.Add(n);
        
        foreach(int n in smaller)
            if(map.Contains(n) && !answer.Contains(n))
                answer.Add(n);
        
        return answer.ToArray();
        
    }