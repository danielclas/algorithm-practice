    public int solution(String S) {
        
        var max = 0;
        
        if(S == "") return -1;
        
        foreach(var s in S.Split(' ')){
            if(IsValid(s)){
                if(s.Length>max){
                    max = s.Length;
                }
            }
        }
        
        return max == 0 ? -1 : max;
    }
    
    public static bool IsValid(string s){
        
        int n = 0, l = 0;
        
        foreach(char c in s){
            if((c>='a' && c<='z') 
            || (c>='A' && c<='Z')){
                l++;
            }else if(c>='0' && c<='9'){
                n++;
            }else{
                return false;
            }
        }
        
        return l % 2 == 0 && n % 2 == 1;
    }