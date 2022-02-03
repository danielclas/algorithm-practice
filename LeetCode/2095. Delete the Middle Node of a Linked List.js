/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var deleteMiddle = function(head) {
    
    if(!head.next) return null;
    
    const len = getListLength(head);
    let current = head;
    let prev;
    let i = 0;
    
    while(i !== Math.floor(len / 2)){
        prev = current;
        current = current.next;
        i++;
    }
    
    prev.next = current.next;
    
    return head;
};

function getListLength(head){
    let current = head, len = 0;
    
    while(current){
        len++;
        current = current.next;
    }
    
    return len;
}