// This is an input class. Do not edit.
class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function reverseLinkedList(head) {
      
      let prev = head, current = prev.next;
      
      while(current){
          let temp = current.next;
          current.next = prev; 
          
          if(prev === head) prev.next = null;
          
          prev = current;
          current = temp;
      }	
      
      return prev;
  }
  
  // Do not edit the lines below.
  exports.LinkedList = LinkedList;
  exports.reverseLinkedList = reverseLinkedList;
  