public class Solution {
    public string Reformat(string s) {
        
        var digits = new List<char>();
        var letters = new List<char>();
        var answer = new StringBuilder();
        
        if(s.Length==1){
            return s;
        }
        
        foreach(char c in s){
            if(Char.IsDigit(c)){
                digits.Add(c);
            }else{
                letters.Add(c);
            }
        }        
                
        if(digits.Count == 0 || letters.Count==0 || digits.Count-letters.Count>1 || letters.Count-digits.Count>1){
            return "";
        }else{
            var longer = digits.Count > letters.Count ? digits : letters;
            var shorter = letters.Count < digits.Count ? letters : digits;
            
            if(longer.Count!=shorter.Count){                    
                answer.Append(longer[0]);
                longer.RemoveAt(0);
            }
            
            for(int i=0 ; i<longer.Count ; i++){
                answer.Append(shorter[i]);
                answer.Append(longer[i]);
            }                            
        }
        
        
        return answer.ToString();
        
        
    }
}