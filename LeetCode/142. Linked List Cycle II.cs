/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
public class Solution {
    public ListNode DetectCycle(ListNode head) {
        
        var pos = 1;
        var temp = head != null ? head.next : null;
        ListNode cycle = null;
        
        if(temp==null) return temp;
        
        while(temp!=null){
            cycle = CheckLoop(head,temp,pos);
            if(cycle!=null) return cycle;
            
            pos++;    
            temp = temp.next;
        }
        
        return cycle;
    }
    
    public ListNode CheckLoop(ListNode head, ListNode node, int pos){
        
        while(pos>0){
            if(ReferenceEquals(head,node)){
                return head;
            }
            head=head.next;
            pos--;
        }
        
        return null;
    }
}