/**
 * Task: write a function that takes in the head of a singly
 * linked list, and returns a boolean representing whether the
 * list's nodes form a palindrome.
 */

function linkedListPalindrome(node) {
    let len = countNodes(node);
    let isEvenLen = len % 2 == 0;
    let count = 0, index = 1;
    let middleIndex = Math.ceil(len / 2);
        
    while(node != null){		
        if(isEvenLen || index != middleIndex){			
            count += index <= len / 2 ? node.value : -node.value;
        }		
        
        node = node.next;
        index++;
    }
    
    return count == 0;
}
  
function countNodes(node){
    let current = node;
    let count = 0;
    
    while(current != null){
        current = current.next;
        count++;
    }
    
    return count;
}
  