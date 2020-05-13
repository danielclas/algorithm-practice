/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int x) { val = x; }
 * }
 */
public class Solution {
    public ListNode MiddleNode(ListNode head) {
        
        int size = GetSize(head)/2;
        ListNode answer = head;
        
        while(size>0){
            answer = answer.next;
            size--;
        }
        
        return answer;
        
    }
    
    public int GetSize(ListNode head){
        
        ListNode node = head;
        int size = 0;
        
        while(node!=null){
            size++;
            node = node.next;
        }
        
        return size;
    }
}