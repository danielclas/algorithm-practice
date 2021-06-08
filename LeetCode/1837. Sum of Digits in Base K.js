
 var sumBase = function(n, k) {
    return [...n.toString(k)].reduce((a,b) => parseInt(a) + parseInt(b), 0);
};