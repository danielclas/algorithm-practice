static int beautifulDays(int i, int j, int k) {

        var count = 0;
        
        do{
            var temp = ReverseNumber(i);
            if(Math.Abs(temp-i) % k == 0) count++;
            i++;
        }while(i!=j+1);

        return count;
    }

    static int ReverseNumber(int n){

        var s = n.ToString();
        var num = new StringBuilder();

        for(int i=s.Length-1 ; i>=0 ; i--){
            num.Append(s[i]);
        }

        return int.Parse(num.ToString());
    }