public class Solution {
    public IList<string> StringMatching(string[] words) {
        
        IList<string> answer = new List<string>();
        
        for(int i=0 ; i<words.Length ; i++){
            for(int j=0 ; j<words.Length ; j++){
                if(i!=j && words[i].IndexOf(words[j])!=-1){
                    if(!answer.Contains(words[j])) answer.Add(words[j]);
                }
            }
        }        
        
        return answer;
    }
   
}