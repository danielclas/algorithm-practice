// This is an input class. Do not edit.
class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

/**
 * Task: Write a function that takes in the head of a singly linked
 * list that contains a loop. The function should return the node 
 * from which the loop originates in constant space.
 */
  
//Solution 1, o(n) time and o(n) memory
function findLoop(head) {	
    if(!head || !head.next) return head;
    
    let arr = [head];
    let current = head;
    
    while(current.next){
        let node = current.next;
        if(arr.indexOf(node) != -1) return node;
        arr.push(node);
        current = current.next;
    }
    
    return null;	
}