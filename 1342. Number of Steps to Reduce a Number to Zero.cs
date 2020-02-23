public class Solution {
    public int NumberOfSteps (int num) {
        
        int steps = 0;
        int toZero = num;
        
        while(toZero!=0){
            if(toZero%2==0){
                toZero/=2;
            }else{
                toZero--;
            }
            steps++;
        }
        
        
        return steps;
    }
}