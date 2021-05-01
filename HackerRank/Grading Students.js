
function gradingStudents(grades) {
    
    return grades.map(g => {
        if(g < 38) return g;
        
        let n = Math.ceil(g / 5);
        
        if(n * 5 - g < 3) return n * 5;
        else return g;
    });
}