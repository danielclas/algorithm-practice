public class Solution {
    public int MaxProfit(int[] prices) {
        
        int mayorDif=0;
        
        for(int i=0, k=1 ; i+k<=prices.Length ; i++){
            if(i+k==prices.Length){
                i=-1;
                k++;
                continue;
            }
            
            if((prices[k+i]-prices[i])>mayorDif){
                mayorDif=prices[k+i]-prices[i];
            }          
            
        }
        
        return mayorDif;
    }
}