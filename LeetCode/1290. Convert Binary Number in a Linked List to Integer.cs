/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int x) { val = x; }
 * }
 */
public class Solution {
    public int GetDecimalValue(ListNode head) {
        
        ListNode node = head;
        string num = "";
        
        while(!ReferenceEquals(node,null)){
            num+=node.val.ToString();
            node = node.next;
        }
        
        return MakeBinary(num);
    }
    
    public int MakeBinary(string s){
        
        double num = 0;
        
        for(int i=s.Length-1, p=0 ; i>=0 ; i--,p++){
            if(s[i]=='1'){
                num+=Math.Pow(2,p);
            }
        }
        
        return (int)num;
        
    }
}