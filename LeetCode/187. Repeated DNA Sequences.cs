public class Solution {
    public IList<string> FindRepeatedDnaSequences(string s) {
        
        Dictionary<string,int> table = new Dictionary<string,int>();     
        IList<string> list = new List<string>();
        string sub = "";
        
        for(int i=0 ; i<=s.Length-10 ; i++){
            sub = s.Substring(i,10);
            if(table.ContainsKey(sub)){
                table[sub]++;
            }else{
                table.Add(sub,1);
            }
        }        
        
        foreach(KeyValuePair<string,int> k in table){
            if(k.Value>1){
                list.Add(k.Key);
            }
        }
        
        return list;
    }   
    
}