/**
 * Task: You are given two linked lists: list1 and list2 of sizes 
 * n and m respectively.
 * Remove list1's nodes from the ath node to the bth node, 
 * and put list2 in their place.
 */

 var mergeInBetween = function(list1, a, b, list2) {
    let nodeA = getNode(list1, a - 1); //1
    let nodeB = getNode(list1, b + 1); //2
    
    nodeA.next = list2; //6
    let current = list2;
    while(current.next != null) current = current.next; //7
    current.next = nodeB; //8
    
    return list1; //9
};

function getNode(node, pos){ //3
    let index = 0;
    let current = node;
    while(index != pos){ //4
        current = current.next;
        index++;
    }
    return current; //5
}

/**
 * This problem is asking us to insert a second linked list between
 * the Nth and Kth node of a first linked list. Given this, our first
 * task is to find the previous node (which we'll call 'A') to our Nth, 
 * and our succesor node (which we'll call 'B') to our Kth. 
 * This way we can set the head node of list 2 as the next node of a,
 * and the b node as the next node of the tail node of list 2.
 * 
 * 1. We call our 'getNode' helper function to get our A node, which
 * will be one before the 'a' index passed in as input.
 * 2. We call our 'getNode' helper function to get our B node,
 * which will be one after the 'b' index passed in as input.
 * 
 * 3. We define a 'getNode' helper function which will return
 * a node of a linked list at a given index.
 * 
 * 4. We traverse our linked list until we arrive at the
 * position passed in as input. We call this variable 'index'
 * but in reality it is just a counter, as linked lists don't
 * implement indexation.
 * 
 * 5. Once we have reached the desired index, we return the node.
 * 
 * 6. We set the head node of list2 as the next node of our A node.
 * 7. We iterate list2 until we find its tail.
 * 8. We set node B as the next node of list2's tail node.
 * 9. Finally, we return the head of the original list.
 */