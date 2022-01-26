// This is an input class. Do not edit.
class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function linkedListPalindrome(head) {
  
      let length = getListLength(head);	
      let half = Math.floor(length / 2);
      let runner = head;
      
      while(half > 0){
          runner = runner.next;	
          half--;
      }
      
    return compare(head, reverse(runner));
  }
  
  function compare(headOne, headTwo){
          
          while(headOne && headTwo){			
              if(headOne.value !== headTwo.value)
                  return false;
              
              headOne = headOne?.next;
              headTwo = headTwo?.next;
          }
          
          return true
  }
  
  function getListLength(head){
      let current = head, size = 0;
      
      while(current){
          size++;
          current = current.next;
      }
      
      return size;
  }
  
  function reverse(node){
      let prev = node, current = prev.next;
      
      while(current){
          let temp = current.next;
          current.next = prev; 
          
          if(prev === node) prev.next = null;
          
          prev = current;
          current = temp;
      }	
      
      return prev;
  }
  
  // Do not edit the lines below.
  exports.LinkedList = LinkedList;
  exports.linkedListPalindrome = linkedListPalindrome;
  