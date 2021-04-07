/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
 var countMatches = function(items, ruleKey, ruleValue) {
  
    const keys = {type: 0, color: 1, name: 2}
    let count = 0;
    
    for(let item of items){
        if(item[keys[ruleKey]] == ruleValue){
            count++;
        }
    }
    
    return count;
};