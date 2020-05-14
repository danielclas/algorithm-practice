static int hourglassSum(int[][] arr) {

        var max = Int32.MinValue;

        for(int row=0 ; row<arr.Length-2 ; row++){
            for(int col=0 ; col<arr[row].Length-2 ; col++){
                var sum = arr[row][col] + arr[row][col+1] + arr[row][col+2];
                sum+=arr[row+1][col+1];
                sum+= arr[row+2][col] + arr[row+2][col+1] + arr[row+2][col+2];

                if(sum>max) max=sum;
            }
        }

        return max;
    }