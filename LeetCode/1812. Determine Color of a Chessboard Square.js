/**
 * @param {string} coordinates
 * @return {boolean}
 */
 var squareIsWhite = function(coordinates) {
    
    let rowIsEven = parseInt(coordinates[1]) % 2 == 0;
    let colIsEven = parseInt((""+coordinates[0]).charCodeAt(0)) % 2 == 0;
    
    return (!colIsEven && rowIsEven) || (colIsEven && !rowIsEven);
};