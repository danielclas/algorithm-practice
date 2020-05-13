public class Solution {
    public int[] SortedSquares(int[] A) {
        
        List<int> list = new List<int>();
        
        foreach(int n in A){
            list.Add((int)Math.Pow(n,2));
        }
        
        list.Sort();
        return list.ToArray();
    }
}