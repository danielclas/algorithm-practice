public class Solution {
    public int[] ProcessQueries(int[] queries, int m) {
        
        var nums = new List<int>();
        var answer = new List<int>();
        
        for(int i=1 ; i<=m ; i++) nums.Add(i);
        
        foreach(int n in queries){
            var ind = nums.IndexOf(n);
            answer.Add(ind);
            nums.RemoveAt(ind);
            var temp = nums.Prepend(n);
            nums = new List<int>(temp);
        }
        
        return answer.ToArray();
    }
}