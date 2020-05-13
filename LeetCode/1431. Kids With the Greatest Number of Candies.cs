public class Solution {
    public IList<bool> KidsWithCandies(int[] candies, int extraCandies) {
        
        int max = Int32.MinValue;
        var list = new List<bool>();
        
        foreach(int n in candies)
            if(n>max) max=n;               
        
        foreach(int n in candies)
            list.Add(n+extraCandies>=max);  
        
        return list;
        
    }
}