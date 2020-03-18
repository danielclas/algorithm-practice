public class Solution {
    public string[] FindRestaurant(string[] list1, string[] list2) {
        
        var table = new Dictionary<string,int>();
        var min = int.MaxValue;
        List<string> list = new List<string>();
        
        for(int i=0 ; i<list1.Length ; i++){
            for(int j=0 ; j<list2.Length ; j++){
                if(list1[i]==list2[j]){
                    table.Add(list1[i],i+j);
                }
            }
        }
        
        foreach(var item in table){
            if(item.Value<min){
                min = item.Value;
            }
        }
        
        foreach(var item in table){
            if(item.Value==min){
                list.Add(item.Key);
            }
        }
        
        return list.ToArray();
    }
}