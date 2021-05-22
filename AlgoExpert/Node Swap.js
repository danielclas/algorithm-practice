/**
 * Task: write a function that takes in the head of a singly linked list, swaps every
 * pair of adjacent nodes in place, and returns its new head.
 */

// This is an input class. Do not edit.
class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
  
function nodeSwap(head) {
    if(!head || !head.next) return head;
    
    let newHead = head.next;
    let prev = head;
    let current = newHead.next;
    
    prev.next = current;
    newHead.next = prev;
    
    while(current){
        if(!current.next) break;
        let next = current.next;
        let temp = next.next;
        
        prev.next = next;
        current.next = temp;
        next.next = current;
        
        prev = next.next;
        current = current.next;
    }
    
    return newHead;
}