/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
 var topKFrequent = function(words, k) {
    
    let counts = {}; //Key: word. Value: number of ocurrences
    let ocurrences = {}; //Key: number of ocurrences. Value: array of words that ocurr key times
    let answer = [];
    
    for(let word of words){
        if(!counts[word]) counts[word] = 0;
        counts[word]++;
    }
    
    for(let word in counts){
        if(!ocurrences[counts[word]])
            ocurrences[counts[word]] = [counts[word], []];
        ocurrences[counts[word]][1].push(word);
    }
    
    for(let o in ocurrences) ocurrences[o][1].sort();
    
    let keys = Object.keys(ocurrences);
    
    keys.sort((a,b) => b - a);
    
    for(let key of keys){
        let arr = ocurrences[key][1];
        let temp = arr.length + answer.length <= k ? arr : arr.slice(0, k - answer.length);
        answer.push(...temp);
    }
    
    return answer;    
};