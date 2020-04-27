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
    public bool HasCycle(ListNode head) {
        
        int count = 1;
        ListNode node = head;
        
        if(head==null) return false;
        
        while(node.next!=null){
            if(LoopThrough(head,node.next,count)){
                return true;
            }
            count++;
            node = node.next;
        }
        
        return false;      
        
    }
    
    public bool LoopThrough(ListNode head, ListNode node, int times){
        
        var temp = head;
        
        while(times>0){
            times--;
            if(ReferenceEquals(temp,node)){
                return true;
            }
            temp = temp.next;
        }
        
        return false;
        
    }
}