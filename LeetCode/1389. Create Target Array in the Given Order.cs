public class Solution {
    public int[] CreateTargetArray(int[] nums, int[] index) {
        
        var list = new List<int>();
        
        for(int i = 0 ; i<nums.Length ; i++){
            var ind = index[i];
            var num = nums[i];
            
            if(ind>=list.Count) list.Add(num);
            else list = Rearrange(list, ind, num);
        }
        
        return list.ToArray();
        
    }
    
    public static List<int> Rearrange(List<int> list, int index, int num){
        
        var temp = new List<int>();
        
        for(int i = 0 ; i<list.Count ; i++){
            if(i==index){
                temp.Add(num);
            }
            
            temp.Add(list[i]);
        }
        
        return temp;
    }
}