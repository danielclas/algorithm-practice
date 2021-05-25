/**
 * Return s after removing the outermost parentheses of every primitive string in the primitive decomposition of S.
 */

var removeOuterParentheses = function(s) {
    let answer = [...s]; //1
    let indices = []; //2

    for(let i = 0 ; i < s.length ; i++){ //3
        if(s[i] == '('){ //4
            indices.push(i);
        }else{
            let j = indices.pop(); //5
            if(indices.length == 0){ 
                answer[j] = '';
                answer[i] = '';
            }         
        }
    }

    return answer.join(''); //6
};

/**
 * This problem is asking us to remove all outer parentheses of the input string.
 * For example, for input "(()())(())", output should be "()()()", and for
 * input "(()())(())(()(()))", output should be "()()()()(())". Note that
 * we are only removing outermost parentheses.
 * 
 * 1. First, we decompose the string into a char array the will allow us to
 * mutate its elements.
 * 
 * 2. We declare an 'indices' array that we will treat as a stack, 
 * which will hold the indices of every opening parentheses we find.
 * 
 * 3. We start iterating through our input string. Here is the same wether we do it on the
 * 'answer' array or on our input string, since we are always moving forward and are guaranteed
 * to always be accessing an element we will not have yet mutated.
 * 
 * 4. We check if the current element is an opening parentheses. If that is the case, 
 * we push its index to our 'indices' stack.
 * 
 * 5. If the current element is a closing parentheses, then we pop our last index from
 * our indices array, which will contain the index of the last opening parentheses we would have
 * found thus far. We keep that index in a variable 'j', and ask:
 *      is the indices stack clear after having popped its top value?
 * (Given that this is a valid parentheses string, we will never run into the issue of calling
 * pop on an empty stack and then checking to see if its length is 0.)
 * If the answer is yes, then we know that the parentheses we have just popped corresponds to an 
 * outermost opening parentheses, and the current element we are evaluating, which at this point
 * we know to be a closing parentheses, corresponds to that opening parentheses. In this case,
 * we set both elements on the 'answer' array to an empty string. This is the way we 'erase' them.
 * 
 * 6. Finally, we join our 'answer' array to a string. This will ignore all
 */