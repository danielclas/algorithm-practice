/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int x) { val = x; }
 * }
 */
public class Solution {
    public int[] NextLargerNodes(ListNode head) {
        
        var next = -1;
        var values = new List<int>();
        ListNode temp, node=head;
        
        while(node!=null){
            temp = node;
            while(temp!=null){
                if(temp.val>node.val){
                    break;
                }
                temp=temp.next;
            }
            
            values.Add(temp == null ? 0 : temp.val);            
            node = node.next;
        }
        
        return values.ToArray();
        
    }
}