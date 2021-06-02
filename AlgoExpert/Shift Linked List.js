class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

/**
 * Task: Write a function that takes in the head of a singly linked
 * list and an integer k, shifts the list in place by k positions,
 * and returns its new head.   
 */
  
function shiftLinkedList(head, k) {
    let len = getLen(head); //1
    
    if(k == 0 || Math.abs(k % len) == 0) return head; //4
    
    if(k > 0) k = k % len; //5
    else if(k < 0) k = len - (Math.abs(k) % len); //6
    
    let current = head; //7
    let runner = head; //7
    
    while(runner.next){ //8
        runner = runner.next;
        if(k <= 0) current = current.next;
        k--;
    }
    
    runner.next = head; //9
    newHead = current.next; //9
    current.next = null; //9
    
    return newHead; //10
}
  
function getLen(head){ 
    let len = 0; //2
    let current = head; //2
    
    while(current){ //3
        len++;
        current = current.next;
    }
    
    return len;
}

/**
 * 1. First, we get the length of the linked list (i.e., how many
 * nodes it includes).
 * 
 * 2. In our getLen function, we declare a len variable that will
 * be incremented as we traverse our list, and a current variable
 * that will initially point to the head of the linked list.
 * 
 * 3. While current is not null, we add 1 to len and assign current
 * to its 'next' pointer, thus moving forward in the linkedlist.
 * 
 * 4. If 'k' equals 0 (i.e., we have to shift the list by 0 positions),
 * or if 'k' modulo of len is 0, we return the list as is. This second
 * condition means that if 'k' is a multiple of len, then it doesn't matter
 * how big 'k' is, if we shifted the list by 'k' positions, we would
 * still end up with the original list.
 * 
 * 5. If 'k' is greater than 0, we have again calculate its modulo against len.
 * At this point we know the result won't be 0 (we have checked that in the
 * previous step). So, if the len of our list is 5 and k = 17, k will be 
 * reasigned with a 2 (17 % 5 = 2). We are basically asking: how many times
 * can we fit len into k? The remainder of that would be the actual times we
 * need to shift the list. In this example, with 'k' = 17, shifting the list
 * 15 times will take us back to the starting list (because 15 is a multiple of
 * 5, the len of the list). Thus, we only shift the list by 2, the remainder
 * of 17 / 5.
 * 
 * 6. If 'k' is lesser than 0, then we reassing 'k' with a different logic.
 * First, we want to know the absolute value of 'k' and calculate its modulo
 * against len. So, if len = 5 and 'k' equals -17, we would get 2. This means,
 * as in the example of the previous step, that we have to shift the list
 * by two positions. Given that 'k' is negative, we have to shift the list
 * by two positions but to the left (i.e. backwards). To avoid having to write
 * a different logic for the rest of the algorithm when 'k' is negative, 
 * we reassign 'k' with len - (Math.abs(k) % len).
 * So, in a list of len 5, doing 2 shifts to the left would be the same
 * as doing 3 shifts to the right. For a different example, consider a list
 * of len 2 and a value 'k' of -1. Shifting the list 1 position to the left
 * is exactly the same as moving the list one position to the right.
 * 
 * 7. We assign a current and a runner variable with the head of
 * the list we received.
 * 
 * 8. We place our runner node k positions from the head, and then
 * move both current and runner forward until runner reaches the end
 * of the list. 
 * Consider this list and a value 'k' of 3. After this step,
 * our pointers would be placed like so:
 *  C              R                        
 *  1 -> 2 -> 3 -> 4 -> 5 -> 6
 * 
 * Once runner is k positions from head, we move both pointers 
 * by one position to the right until the runner node is placed on 
 * the last node of the list. 
 *            C              R                        
 *  1 -> 2 -> 3 -> 4 -> 5 -> 6
 * 
 * 9. Finally, we reassign the next pointers and create
 * a newHead node that will be returned. First, we wrap around
 * the list by pointing the 'next' node of our 'runner' node
 * to the original head. By doing 'runner.next = head', we
 * end up with:
 * 
 *            C              R                        
 *  1 -> 2 -> 3 -> 4 -> 5 -> 6
 *  ^                        |
 *  |                        |
 *  - - - - - - - - - - - - - 
 *    
 * After doing this, we want our newHead to be the next
 * node from the node to which the current pointer points.
 * So, by doing 'newHead = current.next', we end up with:
 * 
 *            C    Nh        R                        
 *  1 -> 2 -> 3 -> 4 -> 5 -> 6
 *  ^                        |
 *  |                        |
 *  - - - - - - - - - - - - - 
 * 
 * Finally, we break the loop of our list by . Since the next
 * node of our current node is the newHead of our list, it follows
 * that the current node will be the list's tail. So, by doing
 * 'current.next = null', we end up with:
 * 
 *            C    Nh        R                        
 *  1 -> 2 -> 3    4 -> 5 -> 6
 *  ^                        |
 *  |                        |
 *  - - - - - - - - - - - - - 
 * 
 * 10. We return the newHead node we have just assigned, thus
 * returning the list depicted above.    
 */