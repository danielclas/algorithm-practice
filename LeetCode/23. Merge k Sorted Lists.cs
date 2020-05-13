/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int x) { val = x; }
 * }
 */
public class Solution {
    public ListNode MergeKLists(ListNode[] lists) {
        
        var values = new List<int>();
        ListNode node;
        ListNode head;
        
        foreach(var list in lists){
            node = list;
            while(node!=null){
                values.Add(node.val);
                node = node.next;
            }
        }
        
        if(values.Count==0){
            return null;
        }
        
        values.Sort();
        head = new ListNode(values[0]);
        node = head;
        
        for(int i=1 ; i<values.Count ; i++){
            node.next = new ListNode(values[i]);
            node = node.next;
        }
        
        return head;
        
    }
}