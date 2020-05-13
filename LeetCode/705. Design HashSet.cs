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
