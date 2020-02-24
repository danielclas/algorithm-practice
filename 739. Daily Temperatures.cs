public class Solution {
    public int[] DailyTemperatures(int[] T) {
        
        List<int> list = new List<int>();
        bool control = false;
        
        for(int i=0 ; i<T.Length-1 ; i++){
            for(int k=i+1 ; k<T.Length ; k++){
                if(T[k]>T[i]){
                    list.Add(k-i);
                    control=true;
                    break;
                }
            }
            if(!control){
                list.Add(0);
            }
            
            control=false;
        }
        
        list.Add(0);
        
        return list.ToArray();
    }
}