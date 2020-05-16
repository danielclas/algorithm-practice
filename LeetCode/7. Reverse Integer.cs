public class Solution {
    public int Reverse(int x) {
        
        var n = x.ToString();
        var temp = new StringBuilder();
        var isNegative = n[0]=='-';
        long number;
        
        for(int i=n.Length-1 ; i>0 ; i--){            
            temp.Append(n[i]);
        }
        
        if(!isNegative){
            temp.Append(n[0]);
            n=temp.ToString();
        }else{
            n='-'+temp.ToString();
        }        
        
        number = Int64.Parse(n);
        
        return number > Int32.MaxValue || number<Int32.MinValue ? 0 : (int) number;    
        
    }
}