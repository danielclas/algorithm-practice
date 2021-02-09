// This is an input class. Do not edit.
class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function removeDuplicatesFromLinkedList(linkedList) {
    
      let node = linkedList;
      
      while(node != null){
          node.next = returnNonDuplicate(node);
          node = node.next;
      }
      
    return linkedList;
  }
  
  function returnNonDuplicate(node){
      
      while(node.next != null){
          if(node.value != node.next.value){
              return node.next;
          }else{
              node = node.next;
          }
      }
      
      return null;
  }
  
  // Do not edit the lines below.
  exports.LinkedList = LinkedList;
  exports.removeDuplicatesFromLinkedList = removeDuplicatesFromLinkedList;
  