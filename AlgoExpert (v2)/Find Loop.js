// This is an input class. Do not edit.
class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function findLoop(head) {
      let current = head;
      
      while(current){
          if(current.seen) return current;
          current.seen = true;
          current = current.next;
      }
      
      return current;
  }
  
  // Do not edit the lines below.
  exports.LinkedList = LinkedList;
  exports.findLoop = findLoop;
  