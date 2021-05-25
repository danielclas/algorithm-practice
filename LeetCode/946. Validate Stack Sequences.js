/**
 * Task: Given two sequences pushed and popped with distinct values, 
 * return true if and only if this could have been the result of a 
 * sequence of push and pop operations on an initially empty stack.
 */

var validateStackSequences = function(pushed, popped) {
    let stack = []; //1
    let i = 0, j = 0; //2
    
    while(j < pushed.length){ //3
        stack.push(pushed[j]);
        if(pushed[j] == popped[i]) break;
        j++;
    }
    
    j++; //4
    
    while(i != popped.length){ //5
        if(stack[stack.length - 1] == popped[i]){ //6
            i++;
            stack.pop();
        }else if(j < pushed.length){ //7
            while(j < pushed.length){ //8
                if(pushed[j] == popped[i]){ //9
                    i++;
                    j++;
                    break;
                }else stack.push(pushed[j]); //10
                j++;
            }
        }else return false; //11      
    }
    
    return true; //12    
};

/**
 * This problem is asking us to determine whether the values in the
 * pushed and popped arrays are valid stack sequences or not. 
 * To be an invalid stack sequence would mean for example trying
 * to pop an element before it could be pushed. In this case the order
 * of the values in the input arrays matters because, since we are
 * dealing with sequences, the indices on the arrays represent a point
 * in time, with the '1' index being posterior to the '0' index of
 * the same array. With this being said, there is no set relation
 * regarding ordering between the pushed and popped array in this matter;
 * so, the order in which we could perform the operations considering both
 * arrays doesn't matter, as long as we stick to the order given
 * within each array.
 * 
 * 1. We declare a 'stack' variable which will hold our dummy stack
 * 2. We declare two indices variables for holding the indices for
 * the pushed and popped array.
 * 
 * 3. We start populating our dummy stack. We do this with this logic:
 *      push all elements of 'pushed' to the sack until that last element
 *      that was pushed equals the first element of 'popped', 
 *      or until you pushed all 'pushed' array.
 * 
 * If we consider the initial input pushed = [1,2,3,4,5] and popped = [4,5,3,2,1],
 * then after step 3 our variables would look like so:
 * 
 *      stack = [1,2,3,4]
 *      i = 0, popped[i] = 4
 *      j = 3, pushed[j] = 4
 * 
 * 4. We move our 'j' index one element to the right. We do this because we want
 * this index to be placed on the first element of 'pushed' that was not pushed
 * to the stack array in the last iteration. As shown above, right after breaking
 * of the 'while' loop, 'j' would be placed on index 3, pointing to the value 4.
 * Hence, we move it to index 4 (pushed[4] = 5).
 * 
 * 5. We begin our main while loop. The condition on which we decided to continue
 * iterating is whether our 'i' pointer, which we use for our 'popped' array,
 * is within the bounds of such array.
 * 
 * 6. Once inside our main while loop, we first ask:
 *      is the top element of my stack equal to popped[i]?
 * 
 * If this is true, then we pop suck element from the stack, and we advanced 'i'
 * before we continue iterating. Here we are esentially asking, 'could I pop this 
 * element next?'? If the answer is yes, this means we are sticking to the sequence
 * provided by the input arrays, and therefore can mark this as valid.
 * 
 * After this first iteration, our variables would look like so:
 * 
 *      stack = [1,2,3]
 *      i = 1, popped[i] = 5
 *      j = 4, pushed[j] = 5
 * 
 * 7. If the previous step evaluates to 'false', then we ask:
 *      is 'j' within the bounds of the pushed array?
 * 
 * 8. If our previous step evaluates to 'true', then we start looping through
 * our 'pushed' array with our 'j' variable as the control index. If you remember
 * from before, 'j' always points to the first element of 'pushed' which has not
 * yet been pushed to the stack. On our second iteration with the example input,
 * 'j' is placed at index 4 (pushed[4] = 5), pointing to the first element of pushed
 * from left to right that has not been pushed to our dummy stack. (note that value 4 
 * from pushed is not in the stack, but only because it has already been pushed and popped).
 * 
 * 9. In this example, pushed[j] does equals pushed[i] on our second iteartion, 
 * so we move both indices by one to the right, and break out of the nested 
 * while loop to continue iterating.
 * By doing this when the equality evaluates to true, we are basically pushing 
 * and then popping said element to the stack, proving that we are still in a valid sequence.
 * Since there is no need to perform those operations, we can just ignore both values and
 * advance our indices.
 * 
 * 10. If step 9 didn't evaluate to true, we pushed the element at pushed[j] to the stack,
 * and advance 'j' one step to the right. Notice that here we have to consider this:
 *      if the element pushed[j] that was just pushed to the stack
 *      equals the element popped[i],
 *      we won't find this equality in the next iteration of this nested loop,
 *      because there won't be such next iteration, given that j will not be less than
 *      pushed.length. In this case, if they are equal, we will find this out in step 6
 *      on our next main loop iteration. If they are not equal, given that j is already
 *      out of bounds of 'pushed', we will return false, as we would have found that
 *      the sequence is not valid.
 * 
 * 11. If none of the two previous comparisons evaluate to true, we simply return false.
 * 12. If we reach the end of our function never finding an invalid sequence, we return true.
 * 
 */
