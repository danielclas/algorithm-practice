/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int x) { val = x; }
 * }
 */
public class Solution {
    public ListNode MergeTwoLists(ListNode l1, ListNode l2) {
        
        ListNode node = l1;
        ListNode head, prev;
        List<int> list = new List<int>();
        
        while(!ReferenceEquals(node,null)){
            list.Add(node.val);
            node = node.next;            
        }
        
        node = l2;
        while(!ReferenceEquals(node,null)){
            list.Add(node.val);
            node = node.next;            
        }
        
        if(list.Count==0){
            return null;
        }
        
        list.Sort();
        head = new ListNode(list[0]);
        prev = head;
        
        for(int i=1 ; i<list.Count ; i++){
            node = new ListNode(list[i]);
            prev.next = node;
            prev = node;
        }
        
        return head;
    }
}