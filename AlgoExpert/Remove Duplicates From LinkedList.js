 
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