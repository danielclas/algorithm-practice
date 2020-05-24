public class Solution {
    public string DayOfTheWeek(int day, int month, int year) {
        
        var date = new DateTime(year,month,day);
        
        return date.DayOfWeek.ToString();
    }
}