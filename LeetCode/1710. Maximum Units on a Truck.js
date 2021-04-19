/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
 var maximumUnits = function(boxTypes, truckSize) {
    
    boxTypes.sort((a,b) => b[1] - a[1]);
    
    let totalUnits = 0, boxesUsed = 0;
    
    for(let type of boxTypes){
        let units = type[1];
        let boxes = type[0];
        let total = units * boxes;
        
        if(boxesUsed == truckSize) break;
        
        if(boxes + boxesUsed <= truckSize){
            totalUnits += total;
            boxesUsed += boxes;
        }else{
            let quant = truckSize - boxesUsed;
            totalUnits += quant * units;
            boxesUsed += quant;
        }
    }
    
    return totalUnits;
};