static void miniMaxSum(int[] arr) {

        var min = Int64.MaxValue;
        var max = Int64.MinValue;
        long t = 0;

        foreach(int n in arr) t+=n;
        foreach(int n in arr){
            long s = t - n;
            if(s<min) min = s;
            if(s>max) max = s;
        }

        Console.WriteLine($"{min} {max}");
    }