public class Solution {
    public bool KLengthApart(int[] nums, int k) {
        
        var prevIndex = -1;
        var i = 0;
        
        for( ; i<nums.Length ; i++){
            if(nums[i]==1){
                if(prevIndex==-1) prevIndex=i;
                else{
                    if(i-prevIndex<k) return false;
                    if(i==nums.Length-1){
                        return i-prevIndex>k;    
                    } 
                    prevIndex=i;
                }
            }
        }
        
        return i-prevIndex>=k;
    }
}