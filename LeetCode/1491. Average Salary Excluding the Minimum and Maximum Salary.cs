public class Solution {
    public double Average(int[] salary) {
        
        var list = new List<int>(salary);
        double acum = 0;
        
        list.Sort();
        list.RemoveAt(0);
        list.RemoveAt(list.Count-1);
        list.ForEach(n => acum+=n);
        
        return (double) acum/(salary.Length-2);
    }
}