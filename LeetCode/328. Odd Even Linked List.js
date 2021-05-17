/**
 * Given the head of a singly linked list, 
 * group all the nodes with odd indices together 
 * followed by the nodes with even indices, and return the reordered list. 
 * The first node is considered odd, and the second node is even, and so on.
 * Note that the relative order inside both the even and odd groups 
 * should remain as it was in the input.
 */

var oddEvenList = function(head) {
    if(!head || !head.next) return head; //1
    
    let a = head, b = head.next, c = b; //2
    
    while(a.next != null && b.next != null){ //3
        a.next = a.next.next; //4
        a = a.next; //5
        b.next = b.next.next; //6
        b = b.next != null ? b.next : b;   
    }
    
    a.next = c; //7
    
    return head; //8
};

/**
 * In this problem we are asked to reorder a linked list by
 * grouping all the even-indexed node first and then
 * all the odd-indexed nodes after. So if our initial list
 * looked like this:
 *  1 -> 2 -> 3 -> 4 -> 5
 * our resulting list should be:
 *  1 -> 3 -> 5 -> 2 -> 4
 * Note that we are dealing with position, not values,
 * when we decide which nodes to put where.
 * 
 * 1. Firstly, if our list is of length 0 or 1, there
 * is nothing to swap, so we just return.
 * 
 * 2. We declare three variables that will hold the
 * list's first node, the list's second node, and a third
 * variable that will be the head of the temporary list
 * we are appending to our initial one.  
 * 
 * 3. We loop through the list as long as the next pointer
 * of both current nodes is not null.
 * 
 * 4. We set the next node of our current 'a' node
 * as the next.next node of our current 'a' node. If we look
 * at the initial graphic, we are pointing our '1' node
 * to our '3' node. 
 * 
 * 5. Once we have done that, we assign to our 'a' variable
 * the next node of 'a', so that now our 'a' variable becomes the 
 * '3' node we just appended.
 * 
 * 6. We do the same we did in step 4 but this time for node 'b'.
 * In our first iteration, our node 'b' points to '2', so our
 * b.next.next node will be the '4' node. Hence after this the
 * next node of our 2 node will be the 4 node. This is what we
 * want to do for both 'a' and 'b' node, to point in each iteration
 * to one after their next node.
 * 
 * 7. Before we return our list, we make sure we append to the tail
 * of our 'original' list (original containing only the odd-indexed nodes),
 * the new temporary list we have created
 * containing the even-indexed nodes. 
 * 
 * 8. We return the reference to the head node, which should be untouched.
 */