public class Solution {
    public IList<int> SelfDividingNumbers(int left, int right) {
        
        var list = new List<int>();
        
        for(int i=left ; i<=right ; i++){
            if(IsDivisible(i)){
                list.Add(i);
            }
        }        
        
        return list;
    }
    
    public bool IsDivisible(int n){
        
        string s = n.ToString();
        int d;
        
        foreach(char c in s){
            d = int.Parse($"{c}");
            if(d==0 || n%d!=0){
                return false;
            }
        }
        
        return true;
    }
}