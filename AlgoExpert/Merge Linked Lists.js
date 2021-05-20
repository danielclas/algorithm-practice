/**
 * Task: write a function that takes in the heads of two singly linked
 * lists that are in sorted order, respectively. The function should
 * merge the lists in place and return the head of the merged list;
 * the merged list should be in sorted order.
 */

class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
  
function mergeLinkedLists(headOne, headTwo) {
    
    let newHead = headOne.value < headTwo.value ? headOne : headTwo;
    let a = newHead.next;
    let b = newHead == headOne ? headTwo : headOne;
    let current = newHead;
    
    while(a || b){
        let c;
        
        if(a && b) c = a.value < b.value ? a : b;		
        c = c ? c : !a ? b : a;
        
        current.next = c;
        
        if(c == a) a = a.next;
        if(c == b) b = b.next;
        
        current = current.next;
    }
    
    return newHead;
}
  