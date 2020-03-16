public class Solution {
    public int[] SortArrayByParity(int[] A) {
        
        List<int> odd = new List<int>();
        List<int> even = new List<int>();
        
        foreach(int n in A){
            if(n%2==1){
                odd.Add(n);
            }else{
                even.Add(n);
            }
        }
        
        even.AddRange(odd);
        
        return even.ToArray();
    }
}