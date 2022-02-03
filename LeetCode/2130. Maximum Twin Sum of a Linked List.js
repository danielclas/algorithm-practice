/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
 var pairSum = function(head) {
    
    const len = getListLength(head);    
    const stack = [];
    
    let max = -Infinity;
    let current = head;
    let i = 0;
    
    while(current){
        if(i === Math.floor(len / 2) && len % 2 === 1) 
            continue;
        if(i < len / 2) stack.push(current.val);
        else{
            const sum = stack.pop() + current.val;
            max = Math.max(max, sum);
        }
        
        current = current.next;
        i++;
    }
    
    
    return max;
};

function getListLength(head){
    let len = 0, current = head;
    
    while(current){
        len++;
        current = current.next;
    }
    
    return len;    
}