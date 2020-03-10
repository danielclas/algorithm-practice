public class Solution {
    public int[] SumZero(int n) {
        
        List<int> list = new List<int>();
        
        for(int i=0 ; i<n/2 ; i++){
            list.Add(i+5);
        }        
        
        for(int i=0 ; i<n/2 ; i++){
            list.Add(-5-i);
        }
        
        if(n%2==1){
            list.Add(0);
        }
        
        return list.ToArray();
    }
}