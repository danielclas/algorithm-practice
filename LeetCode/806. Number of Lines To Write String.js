/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
 var numberOfLines = function(widths, s) {
    
    let lines = 1;
    let width = 0;
    let getWidth = (letter) => widths[letter.charCodeAt(0) - 97];
    
    for(let char of s){
        let w = getWidth(char);
        if(width + w > 100){
            lines++;
            width = 0;
        }
        width += w;
    }
    
    return [lines, width];
};