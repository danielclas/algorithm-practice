/**
 * @param {number} n
 * @return {number}
 */
 var numberOfMatches = function(n) {
    
    let sum = 0, m = 0;
    
    while(m < n){
        let matches = countMatches(n);
        sum += matches;
        m += countTeams(n, matches);
    }
    
    return n % 2 == 0 ? sum - 1 : sum;
};

let countMatches = n => n % 2 == 1 ? (n - 1) / 2 : n / 2;
let countTeams = (n, matches) => n % 2 == 1 ? matches + 1 : matches;