public class Solution {
    public int LastStoneWeight(int[] stones) {
        
        var list = new List<int>(stones);
        list.Sort();
        
        while(list.Count!=1 && list.Count!=0){
            var y = list[list.Count-1];
            var x = list[list.Count-2];
            if(x==y){
                list.RemoveAt(list.Count-1);
                list.RemoveAt(list.Count-1);
            }else{
                list[list.Count-1]-=x;
                list.RemoveAt(list.Count-2);            
                list.Sort();
            }            
        }
        
        return list.Count == 1 ? list[0] : 0;
    }
}