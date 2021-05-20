var swapPairs = function(head) {
    if(!head || !head.next) return head;

    let newHead = head.next;
    let current = newHead.next;
    let prev = head;

    newHead.next = prev;
    prev.next = current;

    while(current && current.next){
        let temp = current.next;
        prev.next = temp;
        current.next = temp.next;
        temp.next = current;
        
        if(!current.next || !current.next.next) break;
        
        prev = current;
        current = current.next;
    }

    return newHead;
};