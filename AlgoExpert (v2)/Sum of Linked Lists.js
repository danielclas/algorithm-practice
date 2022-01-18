// This is an input class. Do not edit.
class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function sumOfLinkedLists(headOne, headTwo) {
    const numOne = getNumber(headOne);
      const numTwo = getNumber(headTwo);
      
      const sum = (numOne + numTwo).toString().split('').reverse();
      
      const newHead = new LinkedList(parseInt(sum.shift()));
      let current = newHead;
      
      while(sum.length > 0){
          current.next = new LinkedList(parseInt(sum.shift()));
          current = current.next;
      }	
      
    return newHead;
  }
  
  function getNumber(head){
      
      const nums = [];
      let current = head;
      
      while(current){
          nums.push(current.value);
          current = current.next;
      }
      
      return parseInt(nums.reverse().join(''));
  }
  
  // Do not edit the lines below.
  exports.LinkedList = LinkedList;
  exports.sumOfLinkedLists = sumOfLinkedLists;
  