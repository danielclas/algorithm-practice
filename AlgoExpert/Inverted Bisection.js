// This is an input class. Do not edit.
class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
  
function invertedBisection(head) {
    if(!head.next) return head;
    
    let len = getLen(head);
    let halfIndex = Math.floor(len / 2);
    let firstHead = head;
    let secondHead = head;
    let middle;
    
    while(halfIndex > 0){
        secondHead = secondHead.next;
        halfIndex--;
    }
    
    if(len % 2 == 1){
        middle = secondHead;
        secondHead = secondHead.next;
    }
    
    firstHead = reverse(firstHead, Math.floor(len / 2) - 1);
    
    let firstTail = firstHead;
    while(firstTail.next){
        firstTail = firstTail.next;
    }
    
    secondHead = reverse(secondHead, Math.floor(len / 2) - 1);
    
    if(!middle){
        firstTail.next = secondHead;
    }else{
        firstTail.next = middle;
        middle.next = secondHead;
    }
    
    return firstHead;
}
  
function reverse(head, len){	
    if(!head.next) return head;
        
    let prev = head; 
    let current = head.next; 
    let next = current.next; 
    
    prev.next = null; 
    
    while(current != null && len > 0){ 
        next = current.next; 
        current.next = prev; 
        prev = current; 
        current = next; 
                len--;
    }
    
    return prev;
}
  
function getLen(head){
    let current = head;
    let len = 0;
    
    while(current){
        len++;
        current = current.next;
    }
    
    return len;
}
  