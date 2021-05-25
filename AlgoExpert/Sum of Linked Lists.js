// This is an input class. Do not edit.
class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  exports.LinkedList = LinkedList;
  
function sumOfLinkedLists(linkedListOne, linkedListTwo) {
  let charsOne = [];
  let charsTwo = [];

  while(linkedListOne != null || linkedListTwo != null){
      if(linkedListOne != null){
          charsOne.push(linkedListOne.value);
          linkedListOne = linkedListOne.next;
      }
      
      if(linkedListTwo != null){
          charsTwo.push(linkedListTwo.value);
          linkedListTwo = linkedListTwo.next;
      }
  }
  
  charsOne.reverse();
  charsTwo.reverse();
  
  let sum = parseInt(charsOne.join('')) + parseInt(charsTwo.join(''));
  let chars = sum.toString().split('');
  
  chars.reverse();
  
  let head = new LinkedList(parseInt(chars[0]));
  let node = head;
  
  if(chars.length == 1) return head;
  
  for(let i = 1 ; i < chars.length ; i++){
      node.next = new LinkedList(parseInt(chars[i]));
      node = node.next;
  }	

  return head;
}
  