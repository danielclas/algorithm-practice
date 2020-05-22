public class Solution {
    public string RemoveDuplicates(string S) {
        
        var stack = new Stack<char>();
        var answer = new StringBuilder();
        char[] arr;
        
        if(S == "") return "";
        
        foreach(char c in S){
            if(stack.Count == 0){
                stack.Push(c);
            }else{
                var temp = stack.Peek();
                if(c==temp){
                    stack.Pop();
                }else{
                    stack.Push(c);
                }
            }
        }
        
        arr = new char[stack.Count];
        var index = arr.Length-1;
        
        foreach(char c in stack){
            arr[index]=c;
            index--;
        }        
                        
        answer.Append(arr);
        
        return answer.ToString();
        
    }
}