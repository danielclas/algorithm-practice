// This is an input class. Do not edit.
class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function removeKthNodeFromEnd(head, k) {
      let size = getSize(head);
      
      if(size - k != 0){
          let prev = getNode(head, size - k);
          let next = getNode(head, size - k + 2);
  
          prev.next = next;		
      }else{
          let node = getNode(head, 2);
          head.value = node.value;
          head.next = node.next;
      }
  }
  
  function getSize(head){
      let size = 0;
      let node = head;
      
      while(node != null){
          size++;
          node = node.next;		
      }
      
      return size;
  }
  
  //1-based index
  function getNode(head, pos){
      let node = head;
      
      while(pos > 1){
          if(node) node = node.next;
          else return;
          
          pos--;
      }
      
      return node;	
  }
  
  // Do not edit the lines below.
  exports.LinkedList = LinkedList;
  exports.removeKthNodeFromEnd = removeKthNodeFromEnd;
  