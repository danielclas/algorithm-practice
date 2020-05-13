public class Solution {
    public int PeakIndexInMountainArray(int[] A) {
        
        int max = Int32.MinValue;
        int index = 0;
        
        for(int i=0 ; i<A.Length ; i++){
            if(A[i]>max){
                max = A[i];
                index = i;
            }
        }
        
        return index;
    }
}