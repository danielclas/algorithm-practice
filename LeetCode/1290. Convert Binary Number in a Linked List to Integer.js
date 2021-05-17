/**
 * Task: Convert binary number stored in a linkedList
 * to a decimal number
 */

var getDecimalValue = function(head) {
    let arr = []; //1
    traverse(head, arr); //2
    
    return parseInt(arr.join(''), 2); //5
};

function traverse(node, arr){
    while(node != null){ //3
        arr.push(node.val);
        node = node.next; //4
    }
}

/**
 * 1. We declare an array which will hold our binary number
 * 2. We call our traverse function with our head and our empty array
 * 3. While our node reference is not null, we append its value to our array
 * 4. Once this is done, we assign our node.next reference to our node
 * 5. When we reach the end of the linkedlist, we simply join the array
 * to convert it to a string, and call parseInt to convert it to
 * an integer, passing the '2' as a second argument to inform the base
 * of the input string
 * 
 */