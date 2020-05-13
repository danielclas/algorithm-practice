/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int x) { val = x; }
 * }
 */
public class Solution {
    public ListNode ReverseList(ListNode head) {
        
        List<int> list = new List<int>();
        ListNode node = head, newHead=null;
        
        while(!ReferenceEquals(node,null)){
            list.Add(node.val);
            node = node.next;
        }       
        
        list.Reverse();
        
        if(list.Count!=0){
            newHead = new ListNode(list[0]);
            node = newHead;

            for(int i=1 ; i<list.Count ; i++){
                ListNode next = new ListNode(list[i]);
                node.next=next;
                node = node.next;
            }
        }
        
        return newHead;
    }
}