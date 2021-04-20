/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
 var kClosest = function(points, k) {
    
    let arr = [];
    
    for(let point of points){
        arr.push([point, getDistance(point[0], point[1])]);
    }
    
    arr.sort((a,b) => a[1] - b[1]);
    
    return arr.slice(0, k).map(p => p[0]);
    
};

function getDistance(x2, y2){
    
    return Math.sqrt(Math.pow((0 - x2), 2) + Math.pow((0 - y2), 2)); 
}