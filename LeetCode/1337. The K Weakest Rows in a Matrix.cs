public class Solution {
    public int[] KWeakestRows(int[][] mat, int k) {
        
        var weakest = new HashSet<int>();
        
        for(int col = 0 ; col<mat[0].Length ; col++){
            for(int row=0 ; row<mat.Length ; row++){
                if(mat[row][col]==0 && !weakest.Contains(row)){
                    weakest.Add(row);
                    if(weakest.Count==k){
                        return weakest.ToArray();
                    }
                }
            }
        }
        
        for(int row = 0 ; row<mat.Length ; row++){
            if(!weakest.Contains(row)){
                weakest.Add(row);
                if(weakest.Count==k)
                    break;
            }
        }
        
        return weakest.ToArray();
    }
}