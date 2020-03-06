public class Solution {
    public int ArrangeCoins(int n) {
        
        int count = 0;
        int s = 1;
        
        while(n-s>=0){
            n-=s;
            s++;
            count++;
        }
        
        return count;
    }
}