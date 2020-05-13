public class CustomStack {

    int maxSize;
    List<int> list;
    
    public CustomStack(int maxSize) {
        this.maxSize = maxSize;    
        this.list = new List<int>();
    }
    
    public void Push(int x) {
        if(list.Count<this.maxSize){
            list.Add(x);
        }
    }
    
    public int Pop() {
        if(list.Count==0){
            return -1;
        }else{
            var k = list[list.Count-1];
            list.RemoveAt(list.Count-1);
            return k;
        }
    }
    
    public void Increment(int k, int val) {
        for(int i=0 ; i<k && i<list.Count ; i++){
            list[i]+=val;
        }
    }
}

/**
 * Your CustomStack object will be instantiated and called as such:
 * CustomStack obj = new CustomStack(maxSize);
 * obj.Push(x);
 * int param_2 = obj.Pop();
 * obj.Increment(k,val);
 */