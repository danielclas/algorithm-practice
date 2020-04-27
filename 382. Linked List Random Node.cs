/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int x) { val = x; }
 * }
 */
public class Solution {
    
    int length = 0;
    ListNode head;
    /** @param head The linked list's head.
        Note that the head is guaranteed to be not null, so it contains at least one node. */
    public Solution(ListNode head) {
        
        ListNode node = head;
        this.head = head;
        
        while(node!=null){
            length++;
            node = node.next;
        }             
    }
    
    /** Returns a random node's value. */
    public int GetRandom() {
        
        int random = new Random().Next(0,length);
        ListNode node = head;
        
        while(random>0){
            node = node.next;
            random--;
        }
        
        return node.val;
        
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * Solution obj = new Solution(head);
 * int param_1 = obj.GetRandom();
 */