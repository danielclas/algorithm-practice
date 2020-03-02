public class MyHashSet {

    List<int> list;
    /** Initialize your data structure here. */
    public MyHashSet() {
        list = new List<int>();
    }
    
    public void Add(int key) {
        if(!list.Contains(key)){
            list.Add(key);
        }
    }
    
    public void Remove(int key) {
        list.Remove(key);
    }
    
    /** Returns true if this set contains the specified element */
    public bool Contains(int key) {
        return list.Contains(key);
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * MyHashSet obj = new MyHashSet();
 * obj.Add(key);
 * obj.Remove(key);
 * bool param_3 = obj.Contains(key);
 */