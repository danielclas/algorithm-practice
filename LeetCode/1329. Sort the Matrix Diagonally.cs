public class Solution {
    public int[][] DiagonalSort(int[][] mat) {
     
        var lines = new Dictionary<int,List<int>>();
        var ind = new Dictionary<int,int>();
        
        for(int i=0 ; i<mat.Length ; i++){
            for(int j=0 ; j<mat[i].Length ; j++){
                if(lines.ContainsKey(i-j)){
                    lines[i-j].Add(mat[i][j]);
                }else{
                    lines.Add(i-j,new List<int>(){mat[i][j]});
                    ind.Add(i-j,0);
                }
            }
        }
        
        foreach(var kvp in lines) kvp.Value.Sort();
        
        for(int i=0 ; i<mat.Length ; i++){
            for(int j=0 ; j<mat[i].Length ; j++){
                mat[i][j] = lines[i-j][ind[i-j]];
                ind[i-j]++;
            }
        }
        
        return mat;        
    }
}