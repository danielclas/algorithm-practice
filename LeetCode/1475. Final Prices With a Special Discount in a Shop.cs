public class Solution {
    public int[] FinalPrices(int[] prices) {
        
        var list = new List<int>();
        
        for(int i=0 ; i<prices.Length ; i++){
            int n = -1;
            for(int j=i+1 ; j<prices.Length ; j++){
                if(prices[j]<=prices[i]){
                    n = prices[i]-prices[j];
                    break;
                }
            }
            list.Add(n == -1 ? prices[i] : n);
        }
        
        return list.ToArray();
    }
}