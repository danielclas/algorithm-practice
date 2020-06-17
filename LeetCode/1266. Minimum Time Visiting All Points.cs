public class Solution {
    public int MinTimeToVisitAllPoints(int[][] points) {
        
        var distance = 0;
        
        for(int i=0 ; i<points.Length-1 ; i++){
            var temp  = new List<int[]>(){points[i],points[i+1]};
            distance+=MinDistance(temp);
        }
        
        return distance;
    }
    
    public static int MinDistance(List<int[]> points){
        
        var a = points[0];
        var b = points[1];
        var count = 0;
        
        while(a[0]!=b[0] || a[1]!=b[1]){
            if(a[0]>b[0]) a[0]--;
            else if(a[0]<b[0]) a[0]++;            
            
            if(a[1]>b[1]) a[1]--;
            else if(a[1]<b[1]) a[1]++;
            
            count++;
        }
        
        return count;
    }
}