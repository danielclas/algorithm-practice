public class Solution {
    public int SearchInsert(int[] nums, int target) {
        
        int ind = Search(nums,target);
        
        if(ind!=-1){
            return ind;
        }else{
            if(nums[nums.Length-1]<target){
                return nums.Length;
            }else{            
                for(int i=0 ; i<nums.Length-1 ; i++){
                    if(nums[i]<target && nums[i+1]>target){
                        return i+1;
                    }
                }
            }
        }            
        
       
        return 0;
    }
    
    public int Search(int[] nums, int target){
        
        int lower=0;
        int upper=nums.Length-1;
        int middle;
        
        while(lower<=upper){
            middle=(lower+upper)/2;
            if(nums[middle]==target){
                return middle;
            }else if(nums[middle]>target){
                upper=middle-1;
            }else{
                lower=middle+1;
            }
        }
        
        return -1;        
    }
}