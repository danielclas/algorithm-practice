
function compareTriplets(a, b) {
    // Write your code here
    let alice = 0, bob = 0;
    
    for(let i = 0 ; i < a.length ; i++){
        alice += a[i] > b[i] ? 1 : 0;
        bob += b[i] > a[i] ? 1 : 0;
    }
    
    return [alice, bob]
}