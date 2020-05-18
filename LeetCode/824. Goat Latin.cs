public class Solution {
    public string ToGoatLatin(string S) {
        
        var words = S.Split(' ');
        var vowels = new HashSet<char>(){'a','A','e','E','I','i','o','O', 'u', 'U'};
        var aString = new StringBuilder("a");
        var answer = new StringBuilder();
        
        foreach(string word in words){
            var temp = new StringBuilder(word);
            if(!vowels.Contains(word[0])){
                temp = new StringBuilder(temp.ToString(1,temp.Length-1)+temp[0]);
            }
            temp.Append("ma");
            temp.Append(aString.ToString());
            
            answer.Append(temp.ToString() + " ");
            aString.Append('a');            
        }
        
        return answer.ToString(0, answer.Length-1);
        
    }
}