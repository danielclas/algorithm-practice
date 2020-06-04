  static int sockMerchant(int n, int[] ar) {

        var socks = new HashSet<int>();
        var count = 0;

        foreach(int a in ar){
            if(socks.Contains(a)){
                socks.Remove(a);
                count++;
            }else{
                socks.Add(a);
            }    
        }

        return count;
    }