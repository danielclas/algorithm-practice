public class Solution {
    public string ThousandSeparator(int n) {
        
        if(n<1000) return n.ToString();
        
        var str = n.ToString();
        var per = (int) str.Length / 3;
        var res = new List<char>();
        
        for(int j=str.Length-1, k=0 ; j>=0 ; ){
            if(k==3){
                res.Add('.');
                k=-1;
            }else{
                res.Add(str[j]);
                j--;
            }
            
            k++;
        }
        
        res.Reverse();
        return new string(res.ToArray());
    }
}