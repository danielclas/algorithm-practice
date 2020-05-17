public class Solution {
    public int[] FindErrorNums(int[] nums) {
        
        var map = new HashSet<int>();
        var answer = new int[2];
        
        foreach(int n in nums){
            if(map.Contains(n)){
                answer[0] = n;
            }else{
                map.Add(n);
            }
        }
        
        for(int i=1 ; i<=nums.Length ; i++){
            if(!map.Contains(i)){
                answer[1]=i;
                break;
            }
        }        
        
        return answer;       
        
    }
}