public static int diagonalDifference(List<List<int>> arr)
    {
        int sumA = 0, sumB = 0;
        
        for(int i=0, j=0, k=arr.Count-1 ; i<arr.Count ; i++, j++, k--){
                sumA+=arr[i][j];
                sumB+=arr[i][k];            
        }

        return Math.Abs(sumA-sumB);
    }