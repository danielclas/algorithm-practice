public class Solution {
    public int CountGoodTriplets(int[] arr, int a, int b, int c) {
     
        int count = 0;
        
        for(int i=0 ; i<arr.Length-2 ; i++){
            for(int j=i+1 ; j<arr.Length-1 ; j++){
                for(int k=j+1 ; k<arr.Length ; k++){
                    if(Math.Abs(arr[i]-arr[j])<=a){
                        if(Math.Abs(arr[j]-arr[k])<=b){
                            if(Math.Abs(arr[i]-arr[k])<=c){
                                count++;
                            }
                        }
                    }
                }
            }
        }
        
        return count;
    }
}