public class Solution {
    public int[] SingleNumber(int[] nums) {
        
        int[] arr = new int[2];
        int ind = 0;
        Dictionary<int,int> table = new Dictionary<int,int>();
        
        foreach(int n in nums){
            if(!table.ContainsKey(n)){
                table.Add(n,1);
            }else{
                table[n]++;
            }           
         }
        
         foreach(KeyValuePair<int,int> kvp in table){
             if(kvp.Value==1){
                 arr[ind]=kvp.Key;
                 ind++;
             }
             
         }      
        
      
        return arr;
        
    }
}