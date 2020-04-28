/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int x) { val = x; }
 * }
 */
public class Solution {
    public ListNode RemoveNthFromEnd(ListNode head, int n) {
        
        ListNode node = head;
        ListNode runner = head;
        ListNode prev = head;
        
        while(n>1){       
            runner = runner.next;
            n--;
        }
        
        while(runner.next!=null){
            prev = node;
            node = node.next;
            runner = runner.next;
        }
        
        if(ReferenceEquals(head,node)){
            return head.next;
        }
        
        prev.next = node.next;
        
        return head;
    }
}