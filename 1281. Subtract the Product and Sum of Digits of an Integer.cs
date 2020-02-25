public class Solution {
    public int SubtractProductAndSum(int n) {
        
        int sum = 0;
        int product = 1;
        int number;
        
        foreach(char c in n.ToString().ToCharArray()){
            number=c - '0';
            sum+=number;
            product*=number;
        }
        
        return product - sum;
    }
}