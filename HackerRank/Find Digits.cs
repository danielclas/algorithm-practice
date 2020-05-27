  static int findDigits(int n) {

        var s = n.ToString();
        var count = 0;

        foreach(char c in s){
            var d = Int32.Parse(""+c);
            if(d!=0 && n%d==0) count++;
        }

        return count;
    }
