public class Solution {
    public bool CheckInclusion(string s1, string s2) {
        
        var arr = new int[26];
        
        foreach(char c in s1)
            arr[c-97]++;
        
        for(int i=0 ; i<=s2.Length-s1.Length ; i++){
            var temp = new int[26];
            var equals = true;
            for(int j=i ; j<i+s1.Length ; j++){
                var index = s2[j]-97;
                if(arr[index]==0 || arr[index]==temp[index]){
                    equals = false;
                    break;
                }else{
                    temp[index]++;
                }
            }
            
            if(equals) return equals;            
        }
        
        return false;        
    }
}