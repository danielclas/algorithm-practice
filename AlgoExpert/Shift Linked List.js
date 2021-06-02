// This is the class of the input linked list.
class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
  
function shiftLinkedList(head, k) {
    let len = getLen(head);
    
    if(k == 0 || Math.abs(k % len) == 0) return head;
    
    if(k > 0) k = (k % len) > 0 ? k % len : k;
    else if(k < 0) k = len - (Math.abs(k) % len);	
    
    let current = head;
    let runner = head;
    
    while(k > 0){
        runner = runner.next;
        k--;
    }
    
    while(runner.next){
        current = current.next;
        runner = runner.next;
    }
    
    runner.next = head;
    newHead = current.next;
    current.next = null;
    
    return newHead;
}
  
function getLen(head){
    let len = 0;
    let current = head;
    
    while(current){
        len++;
        current = current.next;
    }
    
    return len;
}