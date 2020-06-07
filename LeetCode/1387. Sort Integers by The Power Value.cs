public class Solution {
    public int GetKth(int lo, int hi, int k) {
        
        var powers = new Dictionary<int,List<int>>();
        
        if(lo == hi) return lo;
        
        while(lo<=hi){
            var s = Steps(lo);
            if(powers.ContainsKey(s)){
                powers[s].Add(lo);
            }else{
                powers.Add(s,new List<int>(){lo});
            }
            lo++;
        }
        
        var keys = powers.Keys.ToList();
        keys.Sort();
        
        foreach(var key in keys){
            var list = powers[key];
            
            if(k-list.Count>0){
                k-=list.Count;
                continue;
            }
            
            foreach(var num in list){
                k--;
                if(k==0) return num;
            }
        }
        
        return 0;
    }
    
    public int Steps(int n){
        
        var steps = 0;
        
        while(n!=1){
            if(n%2==0){
                n/=2;
            }else{
                n = 3*n+1;
            }
            steps++;
        }
        
        return steps;
    }
}