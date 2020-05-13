public class Solution {
    public string DefangIPaddr(string address) {
        
        string s = "";
        
        foreach(char c in address){
            if(c == '.'){
                s+="[.]";
            }else{
                s+=c;
            }
        }
        
        return s;
    }
}