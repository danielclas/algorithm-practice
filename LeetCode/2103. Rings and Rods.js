/**
 * @param {string} rings
 * @return {number}
 */
 var countPoints = function(rings) {
    const rods = [];
    
    for(let i = 0 ; i < 10 ; i++) rods.push({});
    
    for(let i = 0 ; i < rings.length - 1 ; i += 2){
        const color = rings[i];
        const rod = rings[i + 1];
        
        if(!rods[rod][color]) rods[rod][color] = true;
    }
    
    return rods.filter((rod) => Object.keys(rod).length === 3).length;
};