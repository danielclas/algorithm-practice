    public bool DetectCapitalUse(string word) {
        
        var sub = word.Substring(1);
        
        if(word.Length == 1) return true;
        
        if(AllSameCase(sub, true)){
            if(word[0]<'A' || word[0]>'Z')
                return false;
        }else if(AllSameCase(sub,false)){
            if((word[0]>='a' && word[0]<='z')
              || word[0]>='A' && word[0]<='Z'){
                return true;
            }else{
                return false;
            }
        }else{
            return false;
        }
        
        return true;
    }