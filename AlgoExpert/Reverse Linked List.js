class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
  
/**
 * Task: Write a function that takes in the head of
 * a Singly Linked List, reverses the list in place,
 * and returns its new head. 
 */

function reverseLinkedList(head) {
    if(!head || !head.next) return head; //1
    
    let prev = head; //2
    let current = head.next; //3
    let next = current.next; //4
    
    prev.next = null; //5
    
    while(current != null){ //6
        next = current.next; //7
        current.next = prev; //8
        prev = current; //9
        current = next; //10
    }
    
    return prev;
}

/**
 * This problem is asking us to reverse a linked list in place
 * To do this, we could create a new linked list that contains
 * all the nodes of the original one and return that, but
 * the assignment is asking us specifically to not do that.
 * So what we do simply is keep a track of a current node and
 * a previous node, and make the next node of our current node
 * point to our previous node. In each iteration we move
 * one position forward and reassign this variables.
 * 
 * 1. First we check our head and head.next nodes exist
 * 
 * 2. We create a prev variable that will hold our head variable
 * 
 * 3. We create a current variable which will hold our second node
 * in the list. This would be our starting point when iterating.
 * 
 * 4. We create a next node which will hold our current.next node
 * so that we can keep track of it before ending an iteration. 
 * 
 * 5. Before we start iterating, in order to avoid a loop
 * in our list, we set the initial prev (which holds
 * the original head node) variable's next node as null.
 * 
 * 6. We start iterating, and we do so as long as our current 
 * variable is not null. 
 * 
 * 7. As our next value, we asign the next node of the 
 * current node. We do this because on the next line we
 * will override this pointer, but we need to operate with
 * on the next iteration.
 * 
 * 8. We make our current node's next pointer point to
 * our previous node.
 * 
 * 9. We assign our 'prev' variable to our 'current' variable
 * before finishing an iteration, because we will want to
 * point to it in our next round.
 * 
 * 10. Finally we assign our next variable (which we saved on
 * step 7) to our current one, so our next iteration will be
 * with the following node in the original list.
 * 
 * 11. Finally we return our 'prev' variable, which will
 * hold the last node to be not null. Originally prev
 * is the tail of the input list, and is now the head
 * of the new returning list.
 * 
 * If we take as an example the following list:
 *  1 -> 2 -> 3 -> 4
 * 
 * Our initial values would be
 *  prev -> 1
 *  current -> 2
 *  next -> 3
 * 
 * After assigning this values, we set our prev.next
 * pointer to null. Then we start iterating. In our
 * first iteration, each pointer is positioned as below:
 *  P    C    N
 *  1 -> 2 -> 3 -> 4
 * 
 * Once we finish our first iteration, our list would look
 * like this:
 *       P    C    N
 *  1 <- 2 -> 3 -> 4
 * 
 * On our next iteration, we end up with a list like so:
 *            P    C   N
 *  1 <- 2 <- 3 -> 4
 * 
 * Here our 'next' node would be null, but this is OK. 
 * If we look at step 10 of the solution, we see that
 * after ending an iteration we assign our next value to
 * our current value. Since the condition on which
 * we decide whether to continue iterating or not
 * is if current value is not equal to null, assigning
 * next to current when next is null will effectively
 * end our iteration. On this last step, our list looks
 * like this:
 *                 P    C   N
 *  1 <- 2 <- 3 <- 4
 * 
 * Since current is null, we stopped iterating.
 * As we see our 'prev' value points to the original
 * tail and the new head of the list. We return that.
 */
  