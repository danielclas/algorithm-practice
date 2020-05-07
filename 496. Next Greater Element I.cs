public class Solution {
    public int[] NextGreaterElement(int[] nums1, int[] nums2) {
        
        var list = new List<int>();
        
        for(int i=0 ; i<nums1.Length ; i++){
            int index = Array.IndexOf(nums2,nums1[i]);
            int num = nums1[i];
            if(index!=-1){
                for(int j=index ; j<nums2.Length ; j++){
                    if(nums2[j]>num){
                        num=nums2[j];
                        break;
                    }
                }
            }
            if(num==nums1[i]) num = -1;
            list.Add(num);
        }
        
        return list.ToArray();
    }
}