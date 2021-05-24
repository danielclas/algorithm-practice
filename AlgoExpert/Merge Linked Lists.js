/**
 * Task: write a function that takes in the heads of two singly linked
 * lists that are in sorted order, respectively. The function should
 * merge the lists in place and return the head of the merged list;
 * the merged list should be in sorted order.
 */

class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
  
function mergeLinkedLists(headOne, headTwo) {
    
    let newHead = headOne.value < headTwo.value ? headOne : headTwo; //1
    let a = newHead.next; //2
    let b = newHead == headOne ? headTwo : headOne; //3
    let current = newHead; //4
    
    while(a || b){//5
        let c; //6
        
        if(a && b) c = a.value < b.value ? a : b; //7		
        c = c ? c : !a ? b : a; //8
        
        current.next = c; //9
        
        if(c == a) a = a.next; //10
        if(c == b) b = b.next; //10
        
        current = current.next; //11
    }
    
    return newHead; //12
}
  
/**
 * This problem is asking us to merge two linked lists that are sorted
 * in a way that respects this order. So if we have as inputs these two lists:
 *  2 -> 6 -> 7 -> 8 and 1 -> 3 -> 4 -> 5 -> 9 -> 10
 * our final list should be: 
 *  1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9 -> 10
 * Naturally, our output list will be ordered as well.
 * 
 * 1. First, we decide the head of which list will be our new head. We decide
 * this based on the value each head holds. Whichever has the lowest value
 * will be our new head.
 * 
 * 2. We declare a variable 'a', which will hold the next node of
 * whichever node we chose as head. We do this because when we start
 * comparing which current node of the two lists to add, we don't want 
 * to evaluate the head node we have declared as our newHead in the previous step.
 * 
 * 3. We declare a variable 'b', which will hold the head node we didn't
 * choose as our newHead in step 1. We do this because we want to compare it
 * to 'a' when we start adding nodes to our output list. 
 * 
 * 4. We declare a 'current' variable which holds our newHead, and will
 * iteratively hold our last node of the list. We use this variable
 * to append on each iteration a new node.
 * Having done this, our current pointers are placed like so:
 * 
 *    b
 *    2 -> 6 -> 7 -> 8
 *  curr   a
 *    1 -> 3 -> 4 -> 5 -> 9 -> 10
 * 
 * 5. We start iterating. We do so as long as our 'a' and 'b'
 * variable have any value (i.e, point to an existing node)
 * 
 * 6. We declare a 'c' variable which will hold the node that
 * we want to eventually append to our list on the current iteration.
 * 
 * 7. If both 'a' and 'b' are not null, we assign to 'c' whichever of this
 * two has the lowest value.
 * 
 * 8. Here we check if 'c' has been assigned in the previous step. It wouldn't have
 * been assigned if any of 'a' or 'b' were null. In that case, we check which of 
 * those two are null, and assign to 'c' the one that wasn't. That line translates to:
 * 
 *  Does 'c' have a value?
 *      if true, reassing c to itself
 *      if false, is 'a' null?
 *          if true, assign 'b' to 'c'
 *          if false, assign 'a' to 'c'
 * 
 * Remember that the condition on which we keep iterating or not is whether one of
 * 'a' or 'b' is not null, so in this step we are certaing that one the two will
 * not be null.
 * 
 * 9. We set as the next pointer of our 'current' node whichever node 'c'
 * is pointing to. 
 * 
 * 10. Before moving on, we need to know which of 'a' and 'b' we have assigned
 * as our next value. We are holding that value on 'c', so we can just compare
 * with a '==' operator. Whichever we have assigned, we move to the 'next' pointer.
 * 
 * 11. Finally, we move our 'current' pointer to its 'next' pointer. We are certain
 * it will have a value because we have just assigned it. So, after our first
 * iteration, our pointers will be placed like so: 
 * 
 *   curr  b
 *    2 -> 6 -> 7 -> 8
 *    ^
 *    |  
 *   nh   a
 *    1   3 -> 4 -> 5 -> 9 -> 10
 * 
 * and if we iterate once again, our pointers would be placed like so:
 * 
 *         b
 *    2    6 -> 7 -> 8
 *    ^ \
 *    |  v 
 *   nh  curr  a
 *    1   3 -> 4 -> 5 -> 9 -> 10
 * 12. We return our newHead, which was assigned in step 1.
 */