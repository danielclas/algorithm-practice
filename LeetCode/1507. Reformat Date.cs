public class Solution {
    public string ReformatDate(string date) {
        
        var dict = new Dictionary<string, string>(){
            {"Jan", "01"}, {"Feb", "02"}, {"Mar", "03"},
            {"Apr", "04"}, {"May", "05"}, {"Jun", "06"},
            {"Jul", "07"}, {"Aug", "08"}, {"Sep", "09"},
            {"Oct", "10"}, {"Nov", "11"}, {"Dec", "12"}            
        };
        
        var arr = date.Split(' ');
        var res = arr[2]+"-"+dict[arr[1]]+"-";   
        var day = "";
        
        foreach(char c in arr[0]){
            if(Char.IsDigit(c)){
                day+=c;
            }
        }      
        
        day = day.Length == 1 ? "0"+day : day;
        
        return res+day;
    }
}