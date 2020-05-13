public class Solution {
    public int[] TwoSum(int[] numbers, int target) {
        
            for(int i=0, j=1 ; i+j<numbers.Length ; i++){
                if(i+j==numbers.Length || numbers[i]+numbers[i+j]>target){
                    i = -1;
                    j++;
                    continue;
                }
                
                if(numbers[i]+numbers[i+j]==target){
                    return new int[]{i+1,i+j+1};
                }
            }     
                   
            return null;
    }
}