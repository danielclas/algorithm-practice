public class Solution {
    public string[] FindOcurrences(string text, string first, string second) {
        
        var arr = text.Split(' ');
        var list = new List<string>();
        int i=0;
        
        while(i<arr.Length-2){
            if(arr[i]==first && arr[i+1]==second){
                list.Add(arr[i+2]);
                i+=2;
            }else{
                i++;
            }
        }
        
        return list.ToArray();
    }
}