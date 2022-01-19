// This is an input class. Do not edit.
class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function removeKthNodeFromEnd(head, k) {
    
      let runner = head;
      
      while(k > 1){
          runner = runner.next;
          k--;
      }
      
      let prev, current = head;
      
      while(runner.next){		
          prev = current;
          runner = runner.next;
          current = current.next;
      }
      
      if(prev) prev.next = current.next;
      else{
          head.value = current.next.value;
          head.next = current.next.next;
      }
  }
  
  // Do not edit the lines below.
  exports.LinkedList = LinkedList;
  exports.removeKthNodeFromEnd = removeKthNodeFromEnd;
  