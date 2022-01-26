// This is an input class. Do not edit.
class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function mergeLinkedLists(headOne, headTwo) {
    
      let newHead, current;
      
      while(headOne || headTwo){
          let lesser;
          
          if(!headOne) lesser = headTwo;
          else if(!headTwo) lesser = headOne;
          else lesser = headOne.value < headTwo.value ? headOne : headTwo;
          
          headOne = lesser === headOne ? headOne?.next : headOne;
          headTwo = lesser === headTwo ? headTwo?.next : headTwo;
          
          if(!newHead){
              newHead = lesser;
              current = newHead;
          }else{
              current.next = lesser;
              current = lesser;
          }
      }
      
      return newHead;
  }
  
  // Do not edit the lines below.
  exports.LinkedList = LinkedList;
  exports.mergeLinkedLists = mergeLinkedLists;
  