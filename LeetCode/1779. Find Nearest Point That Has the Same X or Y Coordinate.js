/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
 var nearestValidPoint = function(x, y, points) {
    
    let min = Number.MAX_VALUE;
    let minIndex = -1;
    
    for(let i = 0 ; i < points.length ; i++){
        let point = points[i];
        let x2 = point[0], y2 = point[1];
        if(x2 == x || y2 == y){
            let dist = getManhattanDistance(x, y, x2, y2);
            if(dist < min){
                min = dist;
                minIndex = i;
            }         
        }
        
    }
    
    return minIndex;
};

function getManhattanDistance(x, y, x2, y2){
    
    return Math.abs(x - x2) + Math.abs(y - y2);
}