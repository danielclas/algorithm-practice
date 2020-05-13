public class Solution {
    public IList<IList<int>> LargeGroupPositions(string S) {
        
        IList<IList<int>> list = new List<IList<int>>();
        int j;
        int count=0;
        
        for(int i=0 ; i<S.Length-1 ; i++){
            for(j=i+1 ; j<S.Length ; j++){
                if(S[i]==S[j]){
                    count++;
                }else{
                    break;
                }
            }
            if(count>=2){
                list.Add(new List<int>(){i,j-1});
            }
            i=j-1;
            count = 0;
        }
        
        return list;
    }
}