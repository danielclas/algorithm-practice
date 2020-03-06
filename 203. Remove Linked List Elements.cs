/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int x) { val = x; }
 * }
 */
public class Solution {
    public ListNode RemoveElements(ListNode head, int val) {
        
        ListNode node = head;
        ListNode nHead = null;
        List<int> list = new List<int>();
        
        while(!ReferenceEquals(node,null)){
            if(node.val!=val){
                list.Add(node.val);
            }
            node = node.next;
        }
        
        if(list.Count!=0){
            nHead = new ListNode(list[0]);
            node = nHead;
            for(int i=1 ; i<list.Count ; i++){
                node.next = new ListNode(list[i]);
                node = node.next;
            }
        }
        
        return nHead;
    }
}