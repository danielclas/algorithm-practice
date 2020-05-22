public class Solution {
    public int NumUniqueEmails(string[] emails) {
        
        var hashSet = new HashSet<string>();
        
        foreach(string s in emails){
            var temp = ParseEmail(s);
            if(!hashSet.Contains(temp)){
                hashSet.Add(temp);
            }
        }
        
        return hashSet.Count;
    }
    
    public static string ParseEmail(string email){
        
        var arr = email.Split('@');
        var temp = new StringBuilder();
        
        foreach(char c in arr[0]){
            if(c == '+') break;
            else if(c != '.') temp.Append(c);
        }
        
        temp.Append('@' + arr[1]);
        
        return temp.ToString();
    }
}