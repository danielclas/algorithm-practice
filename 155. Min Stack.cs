public class MinStack {

    List<int> list;
    int min;
    /** initialize your data structure here. */
    public MinStack() {
        list = new List<int>();
        min =  int.MaxValue;
    }
    
    public void Push(int x) {
        list.Add(x);
        CalculateMin();
    }
    
    public void Pop() {
        list.RemoveAt(list.Count-1);
        CalculateMin();            
    }
    
    public int Top() {
        return list[list.Count-1];
    }
    
    public int GetMin() {
        return min;
    }
    
    public void CalculateMin(){
        int temp = int.MaxValue;
        
        foreach(int n in list){
            if(n<temp){
                temp = n;
            }
        }
        
        min = temp;
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack obj = new MinStack();
 * obj.Push(x);
 * obj.Pop();
 * int param_3 = obj.Top();
 * int param_4 = obj.GetMin();
 */