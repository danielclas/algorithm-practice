/**
 * @param {string} path
 * @return {boolean}
 */
 var isPathCrossing = function(path) {
    
    let map = {"0-0":true};
    let pos = [0,0];
    
    for(let move of path){
        let idx = move == 'N' || move == 'S' ? 1 : 0;
        let dir = move == 'N' || move == 'E' ? 1 : -1;
        
        pos[idx] += dir;
        
        let val = pos[0] + "-" + pos[1];
        if(map[val]) return true;
        
        map[val] = true;
    }    
    
    return false;
};