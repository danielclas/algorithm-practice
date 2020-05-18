public class Solution {
    public bool IsValid(string s) {
        
        var opening = new List<char>(){'(','[','{'};
        var closing = new List<char>(){')',']','}'};
        var stack = new Stack<char>();
        
        foreach(char c in s){
            if(opening.Contains(c)){
                stack.Push(c);
            }else{
                char t;
                if(stack.Count == 0){
                    return false;
                }else{
                    t = stack.Pop();
                }
                
                if(opening.IndexOf(t) != closing.IndexOf(c)){
                    return false;
                }
            }
        }
        
        return stack.Count == 0;
    }
}