/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

 var swapNodes = function(head, k) {
    let a, b;
    let current = head, runner = head;
    
    while(k != 1){
        runner = runner.next;
        k--;
    }
    
    a = runner;
    
    while(runner.next != null){
        current = current.next;
        runner = runner.next;
    }
    
    b = a.val;
    a.val = current.val;
    current.val = b;
    
    return head;
};