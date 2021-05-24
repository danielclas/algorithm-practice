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
  
function findLoop(head) {	
    if(!head || !head.next) return head;

    let obj = {};
    let current = head;

    obj[current.value] = [current];

    while(current.next){
        let node = current.next;
        
        if(!obj[node.value]) obj[node.value] = [];	
        if(obj[node.value].includes(node)) return node;		
        
        obj[node.value].push(node);
        
        current = current.next;
    }

    return null;	
}