public class Solution {
    public IList<IList<int>> GroupThePeople(int[] groupSizes) {
        
        IList<IList<int>> list = new List<IList<int>>();
        Dictionary<int,int> table = new Dictionary<int,int>();
        int ind = 0;
        int id;
        
        for(int i=0 ; i<groupSizes.Length ; i++){
            id=groupSizes[i];
            if(table.ContainsKey(id)){
                if(list[table[id]].Count == id){
                    table[id]=ind;
                    list.Add(new List<int>());
                    list[ind].Add(i);
                    ind++;
                }else{
                    list[table[id]].Add(i);
                }
                
            }else{
                table.Add(id,ind);
                list.Add(new List<int>());
                list[ind].Add(i);
                ind++;
            }
        }
        
        return list;
        
    }
}