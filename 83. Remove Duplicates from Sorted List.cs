/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int x) { val = x; }
 * }
 */
public class Solution {
    public ListNode DeleteDuplicates(ListNode head) {
        
        var values = new HashSet<int>();
        ListNode node = head;
        ListNode answer = new ListNode(1);
        
        while(node!=null){
            if(!values.Contains(node.val)){
                values.Add(node.val);
            }
            node = node.next;
        }
        
        node = answer;
        foreach(int value in values){
            node.next = new ListNode(value);
            node = node.next;
        }
        
        return answer.next;
        
    }
}