    static int getMoneySpent(int[] keyboards, int[] drives, int b) {
        
        var paid = -1;

        foreach(var k in keyboards){
            foreach(var d in drives){
                if(k+d<=b && k+d>paid)
                    paid = k+d;
            }
        }

        return paid;
    }