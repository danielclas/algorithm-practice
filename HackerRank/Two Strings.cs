static string twoStrings(string s1, string s2) {

        var hash = new HashSet<char>();

        foreach(char c in s1){
            if(!hash.Contains(c)) hash.Add(c);
        }

        foreach(char c in s2){
            if(hash.Contains(c)) return "YES";
        }

        return "NO";
    }
