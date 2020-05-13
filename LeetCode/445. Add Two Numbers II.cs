/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int x) { val = x; }
 * }
 */
public class Solution {
    public ListNode AddTwoNumbers(ListNode l1, ListNode l2) {
        
        string number = (MakeNumber(l1) + MakeNumber(l2)).ToString();
        ListNode head = new ListNode((int)number[0]-'0');
        ListNode node = head;
        
        for(int i=1 ; i<number.Length ; i++){
            node.next = new ListNode((int)number[i]-'0');
            node = node.next;
        }
        
        return head;              
    }
    
    public System.Numerics.BigInteger MakeNumber(ListNode head){
        
        var node = head;
        var number = "";
        
        while(node!=null){
            number+=node.val;
            node = node.next;
        }
        
        return System.Numerics.BigInteger.Parse(number);
    }
}