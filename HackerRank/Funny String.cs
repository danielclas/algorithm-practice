 static string funnyString(string s) {

        var forward = new List<int>();
        var backwards = new List<int>();

        for(int i=0, j=s.Length-1 ; j>1 ; i++, j--){
            var f = Math.Abs(s[i]-s[i+1]);
            var b = Math.Abs(s[j]-s[j-1]);

            forward.Add(f);
            backwards.Add(b);
        }

        for(int i=0 ; i<forward.Count ; i++){
            if(forward[i]!=backwards[i]) return "Not Funny";
        }

        return "Funny";
    }