static string superReducedString(string s) {

        var stack = new Stack<char>();

        foreach(char c in s){
            if(stack.Count == 0){
                stack.Push(c);
            }else{
                var peek = stack.Peek();
                if(peek == c){
                    stack.Pop();
                }else{
                    stack.Push(c);
                }
            }
        }

        return stack.Count == 0 ? "Empty String" : StackToString(stack);
    }

    static string StackToString(Stack<char> stack){

        var temp = new List<char>();
        var s = new StringBuilder();

        foreach(char c in stack) temp.Add(c);

        temp.Reverse();

        foreach(char c in temp) s.Append(c);

        return s.ToString();
    }