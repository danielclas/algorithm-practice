/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int x) { val = x; }
 * }
 */
public class Solution {
    public ListNode GetIntersectionNode(ListNode headA, ListNode headB) {
        
        ListNode node = headA;
        ListNode nodeB;
        
        while(!ReferenceEquals(node,null)){
            nodeB=headB;    
            while(!ReferenceEquals(nodeB,null)){
                if(ReferenceEquals(node,nodeB)){
                    return node;
                }
                nodeB=nodeB.next;
            }
            node = node.next;
        }
        
        return null;
    }
}