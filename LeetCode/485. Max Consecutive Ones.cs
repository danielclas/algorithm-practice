public class Solution {
    public int FindMaxConsecutiveOnes(int[] nums) {
        
        var stack = new Stack<int>();
        var max = 0;
        
        foreach(int n in nums){
            if(n==1){
                stack.Push(n);
            }else{
                if(stack.Count>max) max = stack.Count;
                stack.Clear();
                
                if(max>nums.Length/2) return max;
            }
        }
        
        if(stack.Count>max) max = stack.Count;
        
        return max;
    }
}