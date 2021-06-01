/**
 * @param {string[]} ops
 * @return {number}
 */
 var calPoints = function(ops) {
    let scores = [];
    
    for(let o of ops){
        if(!isNaN(o)) scores.push(parseInt(o));
        else{
            switch(o){
                case '+':
                    let a = scores[scores.length - 1];
                    let b = scores[scores.length - 2];
                    scores.push(a + b);
                    break;
                case 'D':
                    scores.push(scores[scores.length - 1] * 2);
                    break;
                case 'C':
                    scores.pop();
                    break;
            }
        }
    }
    
    return scores.reduce((a,b) => a + b, 0);
};