function marcsCakewalk(calorie) {
    calorie.sort((a,b) => b - a);
    let num = 0;
    
    for(let i = 0 ; i < calorie.length ; i++){
        num += Math.pow(2, i) * calorie[i];
    }
    
    return num;

}