/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int x) { val = x; }
 * }
 */
public class Solution {
    public int NumComponents(ListNode head, int[] G) {
        
        ListNode node = head;
        int answer = 0;
        int count = 1;
        bool counting = false;
        
        while(node!=null){
            if(Array.Exists(G, value => value == node.val)){
                count++;
                if(!counting){
                    answer++;
                }
                counting = true;
            }else{
                counting = false;
            }         
                   
            node = node.next;
        }
        
        return answer;
    }
}