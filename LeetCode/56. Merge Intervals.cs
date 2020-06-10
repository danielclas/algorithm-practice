public class Solution {
    public int[][] Merge(int[][] intervals) {
        
        var list = new List<int[]>();
        int[] arr = null;
        
        Array.Sort(intervals,  new Comparison<int[]>( 
            (x,y) => { return x[0] < y[0] ? -1 : (x[0] > y[0] ? 1 : 0); }
        ));
        
        for(int i=0 ; i<intervals.Length ; i++){
            if(arr == null){
                arr = intervals[i];
            }else{
                if(arr[1]>=intervals[i][0]){
                    arr[1]=intervals[i][1] > arr[1] ? intervals[i][1] : arr[1];
                }else{
                    list.Add(arr);
                    arr = intervals[i];
                }
            }    
        }       
        
        if(arr != null) list.Add(arr);
        
        return list.ToArray();
    }
}