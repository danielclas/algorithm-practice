// This is an input class. Do not edit.
class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function removeDuplicatesFromLinkedList(head) {
    if(!head || !head.next) return head;
      
      let prev = head;
      let current = head.next;
      
      while(current){
          if(prev.value === current.value){
              prev.next = current.next;
              current = current.next;
          }else{
              prev = prev.next;
              current = current.next;
          }
      }
      
    return head;
  }
  
  // Do not edit the lines below.
  exports.LinkedList = LinkedList;
  exports.removeDuplicatesFromLinkedList = removeDuplicatesFromLinkedList;
  