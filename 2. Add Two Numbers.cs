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
        ListNode head = new ListNode((int)number[number.Length-1]-'0');
        ListNode node = head;
        
        for(int i=number.Length-2 ; i>=0 ; i--){
            node.next = new ListNode((int)number[i]-'0');
            node = node.next;
        }
        
        return head;              
    }
    
    public System.Numerics.BigInteger MakeNumber(ListNode head){
        
        var node = head;
        var number = new List<char>();
        var answer = new StringBuilder();
        
        while(node!=null){
            number.Add(node.val.ToString()[0]);
            node = node.next;
        }
        
        for(int i=number.Count-1 ; i>=0 ; i--){
            answer.Append(number[i]);
        }      
       
            
        return System.Numerics.BigInteger.Parse(answer.ToString());
    }    
}