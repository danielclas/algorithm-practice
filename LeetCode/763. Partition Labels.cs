public class Solution {
    public IList<int> PartitionLabels(string S) {
        
        var chars = new HashSet<char>();
        var last = -1;
        var list = new List<int>();
        
        for(int i=0 ; i<S.Length ; i++){
            chars.Add(S[i]);
            last = S.LastIndexOf(S[i]);
            if(last == i){
                list.Add(1);
            }else{                
                var k = i+1;
                var count = 1;
                while(k!=last && k<S.Length){
                    var t = S.LastIndexOf(S[k]);
                    last = t > last ? t : last;
                    k++;
                    count++;
                }
                i = k;
                list.Add(count+1);
            }
        }
        
        return list;
    }
}