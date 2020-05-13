public class Solution {
    public int UniqueMorseRepresentations(string[] words) {
        
        var code = new Dictionary<char,string>();
        var list = new List<string>();
        var arr = new string[]{".-","-...","-.-.","-..",".","..-.","--.","....","..",".---",
                               "-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",
                               ".--","-..-","-.--","--.."};
        
        for(int i=0 ; i<arr.Length ; i++){
            code.Add((char)(97+i),arr[i]);
        }
        
        
        foreach(string word in words){
            string s = "";
            foreach(char c in word){
                s+=code[c];
            }
            list.Add(s);
        }
        
        return list.Distinct().Count();
        
    }
}