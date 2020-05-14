static int[] reverseArray(int[] a) {

        var arr = new int[a.Length];

        for(int i=a.Length-1, j=0 ; i>=0 ; i--, j++){
            arr[j]=a[i];
        }

        return arr;

    }