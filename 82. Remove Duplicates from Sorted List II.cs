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
        
        var map = new Dictionary<int,int>();
        ListNode newHead, node=head;
        
        while(node!=null){
            if(!map.ContainsKey(node.val)){
                map.Add(node.val,1);
            }else{
                map[node.val]++;
            }
            node = node.next;
        }
        
        newHead = new ListNode(1);
        node = newHead;
        foreach(var kvp in map){
            if(kvp.Value==1){
                ListNode next = new ListNode(kvp.Key);
                node.next = next;
                node = node.next;
            }            
        }
        
        return newHead.next;
    }
}