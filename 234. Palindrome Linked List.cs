/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int x) { val = x; }
 * }
 */
public class Solution {
    public bool IsPalindrome(ListNode head) {
        
        List<int> list = new List<int>();
        ListNode node = head;
        
        while(!ReferenceEquals(node,null)){
            list.Add(node.val);
            node = node.next;
        }
        
        for(int i=0, k=list.Count-1 ; i<list.Count/2 ; i++,k--){
            if(list[i]!=list[k]){
                return false;
            }
        }
        
        return true;        
    }
}